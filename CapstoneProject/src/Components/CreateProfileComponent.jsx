import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const style = {
  width: 700,
  bgcolor: "background.paper",
  p: 2,
  margin: "auto",
};

const fieldStyle = {
  bgcolor: "background.paper",
  marginTop: "30px",
  marginBottom: "30px",
};

const StepOne = ({ onNext, formData, handleInputChange }) => (
  <Box>
    <Typography variant="h6">Personal Information</Typography>
    <TextField
      label="First Name"
      fullWidth
      margin="normal"
      name="firstName"
      value={formData.firstName}
      onChange={handleInputChange}
    />
    <TextField
      label="Last Name"
      fullWidth
      margin="normal"
      name="lastName"
      value={formData.lastName}
      onChange={handleInputChange}
    />
    <TextField
      label="Email"
      fullWidth
      margin="normal"
      name="email"
      value={formData.email}
      onChange={handleInputChange}
    />
    <TextField
      label="Contact Number"
      fullWidth
      margin="normal"
      name="contactNumber"
      value={formData.contactNumber}
      onChange={handleInputChange}
    />
    <Button variant="contained" onClick={onNext}>
      Next
    </Button>
  </Box>
);

const StepTwo = ({ onBack, onNext, formData, handleInputChange }) => (
  <Box>
    <Typography variant="h6">Address Information</Typography>
    <TextField
      label="Address"
      fullWidth
      margin="normal"
      name="address"
      value={formData.address}
      onChange={handleInputChange}
    />
    <TextField
      label="Country"
      fullWidth
      margin="normal"
      name="country"
      value={formData.country}
      onChange={handleInputChange}
    />
    <TextField
      label="State"
      fullWidth
      margin="normal"
      name="state"
      value={formData.state}
      onChange={handleInputChange}
    />
    <TextField
      label="Suburb"
      fullWidth
      margin="normal"
      name="suburb"
      value={formData.suburb}
      onChange={handleInputChange}
    />
    <TextField
      label="Street Address"
      fullWidth
      margin="normal"
      name="streetAddress"
      value={formData.streetAddress}
      onChange={handleInputChange}
    />
    <Button variant="contained" onClick={onBack}>
      Back
    </Button>
    <Button variant="contained" onClick={onNext} sx={{ marginLeft: "8px" }}>
      Next
    </Button>
  </Box>
);

const StepThree = ({ onBack, onNext, role, setRole }) => (
  <Box>
    <Typography variant="h6" sx={{ marginTop: "16px" }}>
      Choose your role:
    </Typography>
    <ToggleButtonGroup
      color="primary"
      value={role}
      exclusive
      onChange={(event, newRole) => setRole(newRole)}
      sx={{ marginBottom: "16px" }}
    >
      <ToggleButton value="sales/marketing">Marketing</ToggleButton>
      <ToggleButton value="admin">Admin</ToggleButton>
      <ToggleButton value="customer_service">Customer Service</ToggleButton>
    </ToggleButtonGroup>

    <Button variant="contained" onClick={onBack}>
      Back
    </Button>
    <Button variant="contained" onClick={onNext} sx={{ marginLeft: "8px" }}>
      Next
    </Button>
  </Box>
);

const StepFour = ({ onBack, onSubmit }) => (
  <Box>
    <Typography variant="h6">Step 3: Review and Submit</Typography>
    <Typography variant="body1">
      Review your information and click submit.
    </Typography>
    <Button variant="contained" onClick={onBack}>
      Back
    </Button>
    <Button variant="contained" onClick={onSubmit} sx={{ marginLeft: "8px" }}>
      Submit
    </Button>
  </Box>
);

const StagedForm = () => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    address: "",
    country: "",
    state: "",
    suburb: "",
    streetAddress: "",
  });

  const handleNext = () => {
    setStep((prevStep) => {
      if (prevStep === 3) {
        const adminData = { ...formData, role };
        const admins = JSON.parse(localStorage.getItem("admins")) || [];
        localStorage.setItem("admins", JSON.stringify([...admins, adminData]));
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          contactNumber: "",
          address: "",
          country: "",
          state: "",
          suburb: "",
          streetAddress: "",
        });
        setRole("");
      }
      return prevStep + 1;
    });
  };

  const handleBack = () => setStep((prevStep) => prevStep - 1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <Box
      sx={{
        width: 500,
        margin: "auto",
        marginTop: "32px",
        bgcolor: "white",
        padding: "30px",
        borderRadius: "20px",
      }}
    >
      {step === 1 && (
        <StepOne
          onNext={handleNext}
          formData={formData}
          handleInputChange={handleInputChange}
        />
      )}
      {step === 2 && (
        <StepTwo
          onBack={handleBack}
          onNext={handleNext}
          formData={formData}
          handleInputChange={handleInputChange}
        />
      )}
      {step === 3 && (
        <StepThree
          onBack={handleBack}
          onNext={handleNext}
          role={role}
          setRole={setRole}
        />
      )}
      {step === 4 && (
        <StepFour
          onBack={handleBack}
          onSubmit={() => alert("Form submitted!")}
        />
      )}
    </Box>
  );
};

export default StagedForm;
