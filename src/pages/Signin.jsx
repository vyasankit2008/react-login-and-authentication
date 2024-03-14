import React from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import authService from '../services/auth.service';

const Signin = () => {

    const defaultTheme = createTheme();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleLoginSuccess = (user) => {
        console.log("Signin handleSubmit res--->", user);
        enqueueSnackbar('Login successful', { variant: 'success' });
        localStorage.setItem('currentUser', JSON.stringify(user));
        navigate('/app');
    };

    const handleLoginFailure = (error) => {
        console.log("Signin handleSubmit err---->", error);
        enqueueSnackbar('Login failed', { variant: 'error' });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const email = data.get('email');
        const password = data.get('password');

        if (email && password) {
            const user = { email, password };
            authService.login(user)
            .then((res) => handleLoginSuccess(user))
            .catch((err) => handleLoginFailure(err));
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <img src="../assets/Ankit Vyas.png" alt="Ankit Vyas" width={'90vh'} />
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Signin;