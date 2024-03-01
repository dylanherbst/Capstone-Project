import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ProductsIcon from "@mui/icons-material/ProductionQuantityLimits";
import CategoryIcon from "@mui/icons-material/Category";
import CustomersIcon from "@mui/icons-material/Group";
import ReportsIcon from "@mui/icons-material/Assessment";
import CouponsIcon from "@mui/icons-material/CardGiftcard";
import KnowledgeBaseIcon from "@mui/icons-material/LibraryBooks";
import UpdatesIcon from "@mui/icons-material/NewReleases";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonalIcon from "@mui/icons-material/Person";
import GlobalIcon from "@mui/icons-material/Public";
import { useState } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 140;

export default function SideBar() {
  const [open, setOpen] = useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon /> },
    { text: "Orders", icon: <ShoppingCartIcon /> },
    // Add more menu items here
  ];

  const infoItems = [
    { text: "Knowledge Base", icon: <KnowledgeBaseIcon /> },
    { text: "Product Updates", icon: <UpdatesIcon /> },
    // Add more info items here
  ];

  return (
    <Box sx={{ display: "flex", bgcolor: "rgb(246, 243, 243)" }}>
      <CssBaseline />
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, ...(open && { display: "none" }) }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        variant="persistent"
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box
          component="main"
          sx={{
            overflow: "auto",
            bgcolor: "rgb(246, 243, 243)",
            height: "100vh",
          }}
        >
          <List>
            {menuItems.map((menuItem, index) => (
              <ListItem key={menuItem.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{menuItem.icon}</ListItemIcon>
                  <ListItemText
                    primary={menuItem.text}
                    primaryTypographyProps={{ style: { marginLeft: "-8px" } }}
                  />{" "}
                  {/* Adjust the left margin */}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {infoItems.map((menuItem, index) => (
              <ListItem key={menuItem.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{menuItem.icon}</ListItemIcon>
                  <ListItemText
                    primary={menuItem.text}
                    primaryTypographyProps={{ style: { marginLeft: "-8px" } }}
                  />{" "}
                  {/* Adjust the left margin */}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: open ? `calc(100% - ${drawerWidth}px)` : "100%",
        }}
      ></Box>
    </Box>
  );
}
