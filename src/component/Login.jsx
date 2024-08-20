import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import "./Login.css";

const Login = () => {
  return (
    <Box className="Login-form">
      <Box className="login">
        <Box className="side1">
          <Typography variant="h3" align="center">
            Welcome Back!
          </Typography>
        </Box>
        <Box className="side2">
          <Typography variant="h4" align="center">
            Account login
          </Typography>

          <Box className="input2" sx={{ textAlign: "center", color: "yellow" }}>
            <TextField
              fullWidth
              margin="normal"
              label="First Name"
              variant="standard"
              size="small"
            />
            <TextField
              fullWidth
              margin="normal"
              label="User Name"
              variant="standard"
              size="small"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Phone"
              variant="standard"
              size="small"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              type="email"
              variant="standard"
              size="small"
            />

            <TextField
              className="Test-field"
              fullWidth
              type="password"
              label="Password"
              variant="standard"
              size="small"
            />
          </Box>
          <Box sx={{ textAlign: "center", marginTop: 2 }}>
            <Typography variant="contained" className="Btn-login">
              SIGN UP
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
