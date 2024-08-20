import React from "react";
import "./Page404.css";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import download from "../image/download (2).svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../image/logo.png";

const drawerWidth = 240;
const navItems = ["Contact"];

function Page404(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
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
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const validModels = ["toyota", "honda", "mazda"];

    if (validModels.includes(lowerCaseSearchTerm)) {
      navigate(`/${lowerCaseSearchTerm}`);
    } else {
      navigate("/page404");
    }
  };
  return (
    <>
      <Box className="toyota-background-img">
        <Box sx={{ display: "flex", color: "black" }}>
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
                  display: { xs: "none", sm: "block", fontWeight: "700" },
                  color: "white",

                  fontWeight: "700",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "1.25rem",
                }}
              >
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "21px", marginRight: "1px" }}
                />
                Blinker
              </Typography>
              <Box
                mr={5}
                sx={{
                  marginLeft: "auto",
                }}
              >
                <Typography
                  onClick={() => navigate("/")}
                  className="curoser-pointer"
                  sx={{
                    color: "white",
                    fontWeight: "700",
                    fontFamily: "Arial, sans-serif",
                    fontSize: "1.rem",
                  }}
                >
                  Home
                </Typography>
              </Box>
              <Box mr={5}>
                <Typography
                  className="curoser-pointer"
                  sx={{
                    color: "white",
                    fontWeight: "700",
                    fontFamily: "Arial, sans-serif",
                    fontSize: "1.rem",
                  }}
                >
                  Find your car
                </Typography>
              </Box>
              <Box mr={5} sx={{ display: { xs: "none", sm: "block" } }}>
                <Button
                  className="curoser-pointer"
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  Contact
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
          <nav>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
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
        <Box sx={{ marginTop: "20px", textAlign: "center" }}>
          <Typography
            className="toyota-heading"
            variant="h3"
            sx={{
              color: "white",
              fontWeight: "700",
              fontFamily: "Arial, sans-serif",
              fontSize: "2.25rem",
            }}
          >
            Browse our cars
          </Typography>
          <Typography variant="h4">
            <input
              type="text"
              placeholder="Search by model"
              className="page404-field"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Typography onClick={handleSearch}>
              <SearchIcon className="page404-search-icon" />
            </Typography>
          </Typography>
        </Box>
      </Box>

      <Typography
        mr={20}
        mt={2}
        className="price-range"
        sx={{
          fontWeight: "700",
          fontFamily: "Arial, sans-serif",
          fontSize: "1.25rem",
        }}
      >
        Price range: $0 to $100,000
      </Typography>

      <Box className="page404-img">
        <img src={download} alt="" />
      </Box>
      <Box className="page404-content">
        <Typography
          className="page404-not"
          variant="h4"
          sx={{
            fontWeight: 600,

            fontWeight: "700",
            fontFamily: "Arial, sans-serif",
            fontSize: "2.25rem",
          }}
        >
          Could not find any matches <br />
          related to your search.
        </Typography>
        <Typography className="page404-not-1" sx={{ fontWeight: 600 }}>
          Please change the name or correct search
        </Typography>

        <button
          className="btn"
          style={{
            color: "white",
            fontWeight: "700",
            fontFamily: "Arial, sans-serif",
            fontSize: "1.25rem",
          }}
        >
          Reset Page
        </button>
      </Box>
    </>
  );
}

export default Page404;
