import React from "react";
import { Link, useNavigate } from "react-router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

const LoginPage = () => {
    const navigate = useNavigate();

    const login = () => {
        navigate("/home");
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "900px",
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    padding: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "300px",
                }}
            >
                <Typography variant="h4" component="h2">
                    Login page
                </Typography>
                <Typography variant="body1">
                    Welcome! ≽(•⩊ •マ≼
                </Typography>

                <TextField
                    id="username"
                    label="User Name"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />

                <Button
                    variant="contained"
                    color="secondary"
                    onClick={login}
                    fullWidth
                >
                    Login
                </Button>

                <Typography variant="body2">
                    Not Registered? <Link to="/signup">Sign Up!</Link>
                </Typography>
            </Paper>
        </Box>
    );
};

export default LoginPage;
