import * as React from "react";
import "./Navbars.css";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../image/logo.png";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["Home", "Find your car"];

function Navbars(props) {
  const navigate = useNavigate();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, cursor: "pointer" }}>
        Blinker
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", color: "black" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="static"
        sx={{ backgroundColor: "transparent", color: "black" }}
      >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            ml={5}
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              fontWeight: 700,
              fontFamily: "Arial, sans-serif",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{
                width: "30px",
                marginRight: "1px",
                cursor: "pointer",
                fontFamily: "Arial, sans-serif",
              }}
            />
            Blinker
          </Typography>
          <Box mr={5} sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "black",
                  fontWeight: "700",
                  fontSize: "17px",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Box className="Contact-form" mr={5}>
            <Button
              sx={{ color: "white", fontFamily: "Arial, sans-serif" }}
              onClick={() => navigate("/login")}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbars.propTypes = {
  window: PropTypes.func,
};

export default Navbars;
