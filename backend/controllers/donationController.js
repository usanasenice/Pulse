import { Op } from "sequelize";
import { BloodDonor, DonationHistory } from "../models/BloodDonor.js";
import { Hospital, BloodRequest } from "../models/Hospital.js";

// Helper function to check donor eligibility
const isDonorEligible = (donor) => {
  const lastDonation = donor.lastDonationDate;
  if (!lastDonation) return true;

  // Check if 56 days (8 weeks) have passed since last donation
  const daysSinceLastDonation = Math.floor(
    (new Date() - new Date(lastDonation)) / (1000 * 60 * 60 * 24)
  );
  return daysSinceLastDonation >= 56;
};

// Helper function to find compatible blood types
const getCompatibleBloodTypes = (bloodType) => {
  const compatibility = {
    "O-": ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"],
    "O+": ["O+", "A+", "B+", "AB+"],
    "A-": ["A-", "A+", "AB-", "AB+"],
    "A+": ["A+", "AB+"],
    "B-": ["B-", "B+", "AB-", "AB+"],
    "B+": ["B+", "AB+"],
    "AB-": ["AB-", "AB+"],
    "AB+": ["AB+"],
  };
  return compatibility[bloodType] || [];
};

export const donationController = {
  // Register a new blood donor
  async registerDonor(req, res) {
    try {
      const donorData = req.body;

      // Create donor with location point
      const donor = await BloodDonor.create({
        ...donorData,
        location: {
          type: "Point",
          coordinates: [donorData.longitude, donorData.latitude],
        },
      });

      res.status(201).json({
        message: "Donor registered successfully",
        donor,
      });
    } catch (error) {
      console.error("Error registering donor:", error);
      res.status(500).json({
        error: "Failed to register donor",
        details: error.message,
      });
    }
  },

  // Find matching hospitals for a donor
  async findMatchingHospitals(req, res) {
    try {
      const { donorId } = req.params;
      const donor = await BloodDonor.findByPk(donorId);

      if (!donor) {
        return res.status(404).json({ error: "Donor not found" });
      }

      if (!isDonorEligible(donor)) {
        return res.status(400).json({
          error: "Donor is not eligible to donate at this time",
          nextEligibleDate: new Date(
            donor.lastDonationDate.getTime() + 56 * 24 * 60 * 60 * 1000
          ),
        });
      }

      // Find hospitals with matching blood needs within 50km
      const matchingHospitals = await Hospital.findAll({
        where: {
          status: "active",
          [`currentBloodNeeds.${donor.bloodType}`]: {
            [Op.gt]: 0,
          },
        },
        attributes: {
          include: [
            [
              sequelize.fn(
                "ST_Distance",
                sequelize.col("location"),
                sequelize.fn(
                  "ST_SetSRID",
                  sequelize.fn(
                    "ST_MakePoint",
                    donor.location.coordinates[0],
                    donor.location.coordinates[1]
                  ),
                  4326
                )
              ),
              "distance",
            ],
          ],
        },
        having: sequelize.literal("distance <= 50000"), // 50km in meters
        order: [[sequelize.literal("distance"), "ASC"]],
      });

      res.json(matchingHospitals);
    } catch (error) {
      console.error("Error finding matching hospitals:", error);
      res.status(500).json({
        error: "Failed to find matching hospitals",
        details: error.message,
      });
    }
  },

  // Find matching donors for a hospital's blood request
  async findMatchingDonors(req, res) {
    try {
      const { requestId } = req.params;
      const bloodRequest = await BloodRequest.findByPk(requestId, {
        include: [{ model: Hospital, as: "hospital" }],
      });

      if (!bloodRequest) {
        return res.status(404).json({ error: "Blood request not found" });
      }

      const compatibleBloodTypes = getCompatibleBloodTypes(
        bloodRequest.bloodType
      );

      // Find eligible donors within 50km of the hospital
      const matchingDonors = await BloodDonor.findAll({
        where: {
          bloodType: {
            [Op.in]: compatibleBloodTypes,
          },
          isAvailable: true,
          status: "active",
        },
        attributes: {
          include: [
            [
              sequelize.fn(
                "ST_Distance",
                sequelize.col("location"),
                sequelize.fn(
                  "ST_SetSRID",
                  sequelize.fn(
                    "ST_MakePoint",
                    bloodRequest.hospital.location.coordinates[0],
                    bloodRequest.hospital.location.coordinates[1]
                  ),
                  4326
                )
              ),
              "distance",
            ],
          ],
        },
        having: sequelize.literal("distance <= 50000"), // 50km in meters
        order: [[sequelize.literal("distance"), "ASC"]],
      });

      // Filter out ineligible donors
      const eligibleDonors = matchingDonors.filter(isDonorEligible);

      res.json(eligibleDonors);
    } catch (error) {
      console.error("Error finding matching donors:", error);
      res.status(500).json({
        error: "Failed to find matching donors",
        details: error.message,
      });
    }
  },

  // Record a completed donation
  async recordDonation(req, res) {
    try {
      const { donorId, hospitalId, status, notes } = req.body;

      const donation = await DonationHistory.create({
        donorId,
        hospitalId,
        donationDate: new Date(),
        status,
        notes,
      });

      if (status === "completed") {
        // Update donor's last donation date
        await BloodDonor.update(
          { lastDonationDate: new Date() },
          { where: { id: donorId } }
        );

        // Update hospital's blood bank capacity
        const donor = await BloodDonor.findByPk(donorId);
        await Hospital.increment(
          { [`bloodBankCapacity.${donor.bloodType}`]: 1 },
          { where: { id: hospitalId } }
        );
      }

      res.status(201).json({
        message: "Donation recorded successfully",
        donation,
      });
    } catch (error) {
      console.error("Error recording donation:", error);
      res.status(500).json({
        error: "Failed to record donation",
        details: error.message,
      });
    }
  },
};

export default donationController;
