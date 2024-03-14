import { Container, Typography } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
    return (
        <>
            <Helmet>
                <title> Dashboard | Ankit ERP </title>
            </Helmet>
            
            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Hi, Welcome back to Dashboard 👋
                </Typography>
            </Container>
        </>
    );
}

export default Dashboard;