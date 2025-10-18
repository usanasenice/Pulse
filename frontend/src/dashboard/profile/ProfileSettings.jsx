import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Edit2,
  Camera,
  Save,
} from "lucide-react";
import Navbar from "../explore/Navbar";

const ProfileSettings = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    username: localStorage.getItem("username") || "Guest",
    email: localStorage.getItem("email") || "guest@example.com",
    fullName: localStorage.getItem("fullName") || "Guest User",
    phone: "+250 788 123 456",
    dateOfBirth: "1990-01-01",
    address: "Kigali, Rwanda",
    bio: "I am passionate about maintaining a healthy lifestyle and staying fit.",
    profilePicture: null,
  });

  const handleInputChange = (field, value) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    // Save to localStorage for now (you can implement API call later)
    Object.entries(profileData).forEach(([key, value]) => {
      localStorage.setItem(key, value);
    });
    setIsEditing(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData((prev) => ({
          ...prev,
          profilePicture: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-blue-900 text-white p-4 md:w-1/5 md:static">
        <div className="flex items-center mb-6">
          <span className="text-xl font-bold">PULSE</span>
        </div>
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Profile Header */}
            <div className="relative h-48 bg-blue-900">
              <div className="absolute -bottom-16 left-8 flex items-end">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-white">
                    {profileData.profilePicture ? (
                      <img
                        src={profileData.profilePicture}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-full h-full p-4 text-gray-400" />
                    )}
                  </div>
                  {isEditing && (
                    <label className="absolute bottom-0 right-0 p-2 bg-blue-600 rounded-full cursor-pointer hover:bg-blue-700 transition">
                      <Camera className="h-5 w-5 text-white" />
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                    </label>
                  )}
                </div>
              </div>
              <div className="absolute top-4 right-4">
                {isEditing ? (
                  <button
                    onClick={handleSave}
                    className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </button>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    <Edit2 className="h-4 w-4 mr-2" />
                    Edit Profile
                  </button>
                )}
              </div>
            </div>

            {/* Profile Content */}
            <div className="pt-20 px-8 pb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Basic Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Basic Information
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <User className="text-blue-600 h-5 w-5" />
                      {isEditing ? (
                        <input
                          type="text"
                          value={profileData.fullName}
                          onChange={(e) =>
                            handleInputChange("fullName", e.target.value)
                          }
                          className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Full Name"
                        />
                      ) : (
                        <span className="text-gray-700">
                          {profileData.fullName}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center space-x-2">
                      <Mail className="text-blue-600 h-5 w-5" />
                      {isEditing ? (
                        <input
                          type="email"
                          value={profileData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Email"
                        />
                      ) : (
                        <span className="text-gray-700">
                          {profileData.email}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center space-x-2">
                      <Phone className="text-blue-600 h-5 w-5" />
                      {isEditing ? (
                        <input
                          type="tel"
                          value={profileData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Phone Number"
                        />
                      ) : (
                        <span className="text-gray-700">
                          {profileData.phone}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Additional Information
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="text-blue-600 h-5 w-5" />
                      {isEditing ? (
                        <input
                          type="date"
                          value={profileData.dateOfBirth}
                          onChange={(e) =>
                            handleInputChange("dateOfBirth", e.target.value)
                          }
                          className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      ) : (
                        <span className="text-gray-700">
                          {profileData.dateOfBirth}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center space-x-2">
                      <MapPin className="text-blue-600 h-5 w-5" />
                      {isEditing ? (
                        <input
                          type="text"
                          value={profileData.address}
                          onChange={(e) =>
                            handleInputChange("address", e.target.value)
                          }
                          className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Address"
                        />
                      ) : (
                        <span className="text-gray-700">
                          {profileData.address}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="md:col-span-2 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Bio</h3>
                  {isEditing ? (
                    <textarea
                      value={profileData.bio}
                      onChange={(e) => handleInputChange("bio", e.target.value)}
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                      placeholder="Tell us about yourself..."
                    />
                  ) : (
                    <p className="text-gray-700">{profileData.bio}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
