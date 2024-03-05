// CreateProfilePage.js

import { useState } from "react";
import { useUserContext } from "../Context/UserContext";
import Button from "@mui/material/Button";
import { Card, CardContent, Typography, Box } from "@mui/material";
import NewUserForm from "../Components/CreateProfileComponent";
import NavBar from "../Components/NavBar";

export default function CreateProfilePage() {
  const { currentUser, handleUpdateUser, handleLogOut } = useUserContext();

  return (
    <>
      <NavBar />
      <NewUserForm />
    </>
  );
}
