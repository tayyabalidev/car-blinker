import {
  Box,
  Typography,
  Card,
  CardMedia,
  Button,
  AppBar,
  Toolbar,
  CardContent,
  IconButton,
} from "@mui/material";
import React from "react";
import "./CarDetails.css";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../image/logo.png";
import { useLocation } from "react-router-dom";

function CarDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const { car, filteredVehicles, searchTerm, value } = location.state;

  return (
    <>
      <Box className="CarDetails-background-img">
        <Box sx={{ display: "flex", color: "black" }}>
          <AppBar
            component="nav"
            position="static"
            sx={{ backgroundColor: "transparent", color: "black" }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                ml={5}
                sx={{
                  display: { xs: "none", sm: "block" },
                  color: "white",
                  fontWeight: 700,
                  fontFamily: "Arial, sans-serif",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
              >
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "23px", marginRight: "8px" }}
                />
                Blinker
              </Typography>
              <Box sx={{ marginLeft: "auto", display: "flex", gap: 3 }}>
                <Box className="Contact-CarDetails" mr={5}>
                  <Typography
                    sx={{ fontWeight: "700" }}
                    onClick={() => navigate("/login")}
                  >
                    Contact
                  </Typography>
                </Box>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </Box>
      {/* <Navbars /> */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 24px",
          marginTop: "24px",
        }}
      >
        <Typography
          variant="contained"
          className="Button-CarDetails"
          sx={{ fontfamily: "Playfair Display" }}
          onClick={() =>
            navigate("/Main", {
              state: { filteredVehicles, searchTerm, value },
            })
          }
        >
          Back to Main
        </Typography>
        <Typography
          sx={{ backgroundColor: "#393DAE" }}
          className="Button-CarDetails"
          variant="contained"
          onClick={() => navigate("/")}
        >
          Go to Home
        </Typography>
      </Box>

      <Box sx={{ maxWidth: 800, margin: "0 auto" }}>
        <Card>
          <CardMedia
            component="img"
            image={car.image}
            alt={car.model_name}
            sx={{ width: "100%", height: "auto" }}
          />

          <CardContent>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              {car.make_name} {car.model_name}
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              Trim: {car.trim_name}
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 1 }}>
              MSRP: ${car.trim_msrp}
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 1 }}>
              Invoice: ${car.trim_invoice}
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 1 }}>
              Engine Type: {car.engine_type}
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 1 }}>
              Horsepower: {car.engine_horsepower_hp} HP @{" "}
              {car.engine_horsepower_rpm} RPM
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 1 }}>
              Transmission: {car.engine_transmission}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default CarDetails;
