import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Checkbox,
  Box,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const AdminList = ({ admins, setAdmins }) => {
  const [selectedAdmins, setSelectedAdmins] = useState([]);
  useEffect(() => {
    const adminsFromLocalStorage =
      JSON.parse(localStorage.getItem("admins")) || [];
    setAdmins(adminsFromLocalStorage);
  }, []);

  const handleDelete = () => {
    const updatedAdmins = admins.filter(
      (admin) => !selectedAdmins.includes(admin.email)
    );
    setAdmins(updatedAdmins);
    localStorage.setItem("admins", JSON.stringify(updatedAdmins));
    setSelectedAdmins([]);
  };

  const handleCheckboxChange = (event, email) => {
    if (event.target.checked) {
      setSelectedAdmins((prevSelected) => [...prevSelected, email]);
    } else {
      setSelectedAdmins((prevSelected) =>
        prevSelected.filter((selectedEmail) => selectedEmail !== email)
      );
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
          marginBottom: "5px",
        }}
      >
        <div></div>
        <Button sx={{ color: "red" }} onClick={handleDelete}>
          <DeleteIcon />
          <Typography sx={{ margin: "5px" }}>Remove</Typography>
        </Button>
      </Box>

      <TableContainer component={Paper} sx={{ borderRadius: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Selected</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Contact Number</TableCell>
              <TableCell>Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {admins.map((admin, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Checkbox
                    checked={selectedAdmins.includes(admin.email)}
                    onChange={(event) =>
                      handleCheckboxChange(event, admin.email)
                    }
                  />
                </TableCell>
                <TableCell>{admin.firstName}</TableCell>
                <TableCell>{admin.lastName}</TableCell>
                <TableCell>{admin.email}</TableCell>
                <TableCell>{admin.contactNumber}</TableCell>
                <TableCell>{admin.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AdminList;
