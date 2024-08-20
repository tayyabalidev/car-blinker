import React, { useState } from "react";
import "./Home.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import city from "../image/city.png";
import Navbars from "./Navbars";
import { useNavigate } from "react-router-dom";
import { data } from "../data/vehicleData";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      alert("Please enter a search term");
      return;
    }

    const filteredData = data.filter((car) =>
      car.make_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const limitedData = filteredData.slice(0, 20);

    navigate("/main", {
      state: { searchTerm, filteredVehicles: limitedData },
    });
  };

  return (
    <>
      <Navbars />
      <Box className="home-content" sx={{ fontFamily: "Arial, sans-serif" }}>
        <Box>
          <Typography
            className="home-text"
            variant="h3"
            sx={{ fontWeight: 700, fontFamily: "Arial, sans-serif" }}
          >
            New Jersey most awarded <br /> car subscription platform
          </Typography>
        </Box>

        <Typography
          className="home-text-1"
          mt={2}
          sx={{ fontWeight: 600, fontFamily: "Arial, sans-serif" }}
        >
          FIND YOUR DREAM CAR WITH <span>BLINKER</span>
        </Typography>
        <Typography mt={5} sx={{ display: "flex", justifyContent: "center" }}>
          <input
            type="text"
            placeholder="Search by model"
            className="text-field"
            name="make_id"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>
            <SearchIcon className="home-search-icon" />
          </button>
        </Typography>
      </Box>

      <Box className="home-img">
        <img src={city} alt="City" />
      </Box>
    </>
  );
}

export default Home;
