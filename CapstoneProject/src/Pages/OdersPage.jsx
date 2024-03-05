import React from "react";
import HomeStore from "../../../../DashboardComponent";
import { useEffect } from "react";
import { useUserContext } from "../Context/UserContext";
import NavBar from "../Components/NavBar";

export default function HomePage() {
  const store = HomeStore();
  const { currentUser, handleUpdateUser, handleLogOut } = useUserContext();

  useEffect(() => {
    store.APIfetch();
  }, []);

  return (
    <>
      <NavBar />
      <div style={{ margin: "10px" }}>Welcome Back! {currentUser.userName}</div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
          width: "100%",
          boxSizing: "border-box",
        }}
      ></div>
    </>
  );
}
