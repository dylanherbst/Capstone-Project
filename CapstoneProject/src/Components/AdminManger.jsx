import React, { useState, useEffect } from "react";
import AdminList from "./AdminList";

const AdminManagement = () => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    const adminsFromLocalStorage =
      JSON.parse(localStorage.getItem("admins")) || [];
    console.log("Admins from localStorage:", adminsFromLocalStorage);
    setAdmins(adminsFromLocalStorage);
  }, []);

  const addAdmin = (newAdmin) => {
    const updatedAdmins = [...admins, newAdmin];
    setAdmins(updatedAdmins);
    localStorage.setItem("admins", JSON.stringify(updatedAdmins));
  };
  const deleteAdmin = (index) => {
    const updatedAdmins = [...admins];
    updatedAdmins.splice(index, 1);
    setAdmins(updatedAdmins);
    localStorage.setItem("admins", JSON.stringify(updatedAdmins));
  };
  return (
    <div>
      <AdminList
        admins={admins}
        setAdmins={setAdmins}
        deleteAdmin={deleteAdmin}
      />
    </div>
  );
};

export default AdminManagement;
