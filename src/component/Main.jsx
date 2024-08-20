import React, { useState, useEffect } from "react";
import "./Main.css";
import {
  Button,
  Container,
  AppBar,
  Box,
  Toolbar,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Slider,
  IconButton,
  Drawer,
  CssBaseline,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../image/logo.png";
import { data } from "../data/vehicleData";

function Main(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const [value, setValue] = useState([0, 50000]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (location.state) {
      setSearchTerm(location.state.searchTerm || "");
      setValue(location.state.value || [0, 50000]);
      setFilteredVehicles(location.state.filteredVehicles || []);
    } else {
      setFilteredVehicles(data.slice(0, 20));
    }
  }, [location.state]);

  const handleMoreInfo = (car) => {
    navigate("/car-details", {
      state: { car, filteredVehicles, searchTerm, value },
    });
  };

  const handleSearch = () => {
    const filteredBySearchTerm = data.filter((car) =>
      car.make_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredData = filteredBySearchTerm.filter(
      (car) => car.trim_invoice >= value[0] && car.trim_invoice <= value[1]
    );

    const limitedData = filteredData.slice(0, 20);
    setFilteredVehicles(limitedData);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    handleSearch();
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, cursor: "pointer" }}>
        Blinker
      </Typography>
      <List>
        {["Home", "Contact"].map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              onClick={() => navigate(item === "Home" ? "/" : "/login")}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    props.window !== undefined ? () => props.window().document.body : undefined;

  return (
    <>
      <Box className="Main-background-img">
        <CssBaseline />
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
                  display: { xs: "none", sm: "block" },
                  color: "white",
                  fontWeight: 700,
                  fontFamily: "Arial, sans-serif",
                  fontSize: "1.5rem",
                }}
              >
                <img
                  src={logo}
                  alt="logo"
                  style={{
                    width: "23px",
                    marginRight: "8px",
                    fontFamily: "Arial, sans-serif",
                  }}
                />
                Blinker
              </Typography>
              <Box
                sx={{
                  marginLeft: "auto",
                  display: { xs: "none", sm: "flex" },
                  gap: 3,
                }}
              >
                <Typography
                  onClick={() => navigate("/")}
                  className="cursor-pointer"
                  sx={{
                    fontWeight: 600,
                    color: "white",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  Home
                </Typography>
                <Box className="Contact-Main">
                  <Typography
                    onClick={() => navigate("/login")}
                    sx={{
                      fontWeight: 600,
                      color: "white",
                      fontFamily: "Arial, sans-serif",
                    }}
                    className="cursor-pointer"
                  >
                    Contact
                  </Typography>
                </Box>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
        <Drawer
          container={container}
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
              width: 240,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Box sx={{ marginTop: "20px", textAlign: "center" }}>
          <Typography variant="h3" className="Main-heading">
            Browse our cars
          </Typography>
          <Box>
            <input
              type="text"
              placeholder="Search by model"
              className="Main-field"
              name="make_id"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton onClick={handleSearch}>
              <SearchIcon className="Main-search-icon" />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Box className="price-range">
        <Typography>
          Price range: ${value[0]} to ${value[1]}
        </Typography>
        <Box width="100%">
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            min={0}
            max={50000}
            step={3000}
          />
        </Box>
        <Typography size="small" sx={{ textAlign: "end" }}>
          ${value[0]} - ${value[1]}
        </Typography>
      </Box>

      <Container>
        <Grid container justifyContent="center" alignItems="center" spacing={3}>
          {filteredVehicles?.map((car) => (
            <Grid item xs={12} sm={6} md={4} key={car.trim_id}>
              <Card>
                <CardActionArea onClick={() => handleMoreInfo(car)}>
                  <CardMedia
                    component="img"
                    height="185"
                    image={car.image}
                    alt={car.model_name}
                  />
                  <Box className="overlay">
                    <Typography variant="body2" color="textSecondary">
                      More Info
                    </Typography>
                    <ArrowForwardIcon />
                  </Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{ fontWeight: 700 }}
                    >
                      {car.make_name} {car.model_name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Trim: {car.trim_name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Price: ${car.trim_invoice}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Main;
