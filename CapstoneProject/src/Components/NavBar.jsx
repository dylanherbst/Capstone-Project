import { Box, IconButton, Typography, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import SideBar from "./SideBar";
import { useUserContext } from "../Context/UserContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();
  const { currentUser, handleUpdateUser, handleLogOut } = useUserContext();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      width="100vw"
      position="fixed"
      top={0}
      zIndex={1000}
      sx={{
        boxShadow: "none !important",
        "& .MuiPaper-root": {
          boxShadow: "none !important",
        },
      }}
    >
      <SideBar></SideBar>
      {/* SEARCH BAR */}
      {/* <Box
        display="flex"
        alignItems="center"
        backgroundColor={theme.palette.primary.main}
        borderRadius="3px"
        marginLeft="-300px"
        sx={{
          boxShadow: "none !important",
          "& .MuiPaper-root": {
            boxShadow: "none !important",
          },
        }}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: "10px" }}>
          <SearchIcon />
        </IconButton>
      </Box> */}
      {/* ICONS */}
      <Box display="flex" justifyContent="flex-end">
        <Typography sx={{ margin: "15px" }}> {currentUser.userName}</Typography>
        <IconButton component={Link} to="/account">
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;
