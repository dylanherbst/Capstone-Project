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

const StepOne = ({ onNext }) => (
  <Box>
    <Typography variant="h6">Personal Information</Typography>
    <TextField label="First Name" fullWidth margin="normal" />
    <TextField label="Last Name" fullWidth margin="normal" />
    <TextField label="Email" fullWidth margin="normal" />
    <TextField label="Contact Numebr" fullWidth margin="normal" />
    <Button variant="contained" onClick={onNext}>
      Next
    </Button>
  </Box>
);

const StepTwo = ({ onBack, onNext }) => (
  <Box>
    <Typography variant="h6">Address Information</Typography>
    <TextField label="Address" fullWidth margin="normal" />
    <TextField label="Country" fullWidth margin="normal" />
    <TextField label="State" fullWidth margin="normal" />
    <TextField label="Suburb" fullWidth margin="normal" />
    <TextField label="Street Address" fullWidth margin="normal" />
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

  const handleNext = () => setStep((prevStep) => prevStep + 1);
  const handleBack = () => setStep((prevStep) => prevStep - 1);

  return (
    <Box
      sx={{
        width: 500,
        margin: "auto",
        marginTop: "32px",
        bgcolor: "white",
        padding: "30px",
        borderRadius: "10px",
      }}
    >
      {step === 1 && <StepOne onNext={handleNext} />}
      {step === 2 && <StepTwo onBack={handleBack} onNext={handleNext} />}
      {step === 3 && <StepThree onBack={handleBack} onNext={handleNext} />}
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
