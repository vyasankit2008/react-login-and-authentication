import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { Box, Container } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const Mainlayout = ({ children }) => {
    const navigate = useNavigate();
    const activeSessionData = localStorage.getItem('currentUser');
    
    useEffect(() => {
        const isAuthenticated = JSON.parse(activeSessionData) !== null;
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [activeSessionData, navigate]);

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    minHeight: '100vh',
                }}
            >
                <Sidebar />
                <Container
                    component="main"
                    lg={{
                        flexGrow: 1,
                        padding: 3,
                        overflow: 'auto',                        
                    }}
                >
                    {children}
                </Container>
            </Box>
        </>
    );
}

export default Mainlayout;
