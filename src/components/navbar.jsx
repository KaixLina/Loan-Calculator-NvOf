import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Tabs,
  Tab,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../context/themecontext";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const tabData = [
    { label: "HOME", path: "/" },
    { label: "EXCHANGE RATES (LIVE)", path: "/exchange" },
    { label: "ABOUT", path: "/about" },
    { label: "ERROR PAGE", path: "/error" },
  ];

  const currentTab = tabData.findIndex((tab) => tab.path === location.pathname);
  const toggleDrawer = (open) => () => setDrawerOpen(open);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar sx={{ justifyContent: "space-between", px: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {isMobile && (
              <IconButton color="inherit" onClick={toggleDrawer(true)} sx={{ mr: 1 }}>
                <MenuIcon />
              </IconButton>
            )}
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: "bold",
                fontFamily: "'Roboto', sans-serif",
                letterSpacing: "1px",
                fontSize: "1.2rem",
              }}
            >
              Loan Calculator
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            {!isMobile && (
              <Tabs
                value={currentTab}
                textColor="inherit"
                indicatorColor="secondary"
                sx={{
                  ".MuiTab-root": { minWidth: 100 },
                  ".Mui-selected": {
                    backgroundColor: "rgba(255,255,255,0.15)",
                    borderRadius: 2,
                  },
                  mr: 2,
                  fontFamily: "'Roboto', sans-serif",
                }}
              >
                {tabData.map((tab) => (
                  <Tab key={tab.label} label={tab.label} component={Link} to={tab.path} />
                ))}
              </Tabs>
            )}
            <IconButton onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer*/}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, padding: "16px" }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
            <img
              src="https://cdn-icons-gif.flaticon.com/10971/10971767.gif"
              alt="Profile"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                objectFit: "cover",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
              }}
            />
          </Box>

          <List>
            {tabData.map((tab) => (
              <ListItem key={tab.label} disablePadding>
                <ListItemButton component={Link} to={tab.path}>
                  <ListItemText
                    primary={tab.label}
                    sx={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "1rem",
                      fontWeight: "500",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
