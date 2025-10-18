import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  TextField,
  MenuItem,
  Alert,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Donation = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [donationData, setDonationData] = useState({
    hospitalId: "",
    units: 1,
    preferredDate: "",
    notes: "",
  });

  // Get user data from localStorage
  const userData = {
    id: localStorage.getItem("id"),
    bloodType: localStorage.getItem("bloodType"),
    fullName: localStorage.getItem("fullName"),
  };

  useEffect(() => {
    fetchHospitals();
  }, []);

  const fetchHospitals = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/hospitals");
      setHospitals(response.data);
      console.log("Fetched hospitals:", response.data);
    } catch (err) {
      console.error("Error fetching hospitals:", err);
      setError("Failed to fetch hospitals. Using test data instead.");

      // Use test data if API fails
      const testData = [
        { id: "1", name: "City General Hospital", address: "123 Main St" },
        { id: "2", name: "Memorial Medical Center", address: "456 Park Ave" },
      ];
      setHospitals(testData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonationData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // For demo purposes, just simulate a successful API call
      // const response = await axios.post('http://localhost:5001/api/donations', {
      //   ...donationData,
      //   donorId: userData.id,
      //   status: 'pending'
      // });

      // Show success message after delay to simulate API call
      setTimeout(() => {
        setSuccess("Donation request submitted successfully!");
        setOpenDialog(true);
        setDonationData({
          hospitalId: "",
          units: 1,
          preferredDate: "",
          notes: "",
        });
        setLoading(false);
      }, 1000);
    } catch (err) {
      setError(
        err.response?.data?.error ||
          "Failed to submit donation request. Please try again."
      );
      setLoading(false);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSuccess("");
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Blood Donation
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {success}
        </Alert>
      )}

      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Your Blood Type"
                  value={userData.bloodType || ""}
                  disabled
                  helperText="Your registered blood type"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  select
                  label="Select Hospital"
                  name="hospitalId"
                  value={donationData.hospitalId}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="">Select Hospital</MenuItem>
                  {hospitals.map((hospital) => (
                    <MenuItem key={hospital.id} value={hospital.id}>
                      {hospital.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  type="number"
                  label="Units to Donate"
                  name="units"
                  value={donationData.units}
                  onChange={handleChange}
                  required
                  inputProps={{ min: 1, max: 4 }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  type="date"
                  label="Preferred Donation Date"
                  name="preferredDate"
                  value={donationData.preferredDate}
                  onChange={handleChange}
                  required
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Additional Notes"
                  name="notes"
                  value={donationData.notes}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={loading}
                  sx={{ mr: 2 }}
                >
                  {loading ? (
                    <CircularProgress size={24} />
                  ) : (
                    "Submit Donation Request"
                  )}
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => navigate("/dashboard")}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>

      {openDialog && (
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Donation Request Submitted</DialogTitle>
          <DialogContent>
            <Typography>
              Thank you for your donation request! The hospital will contact you
              shortly to confirm the details.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Close</Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default Donation;
