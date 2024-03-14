import { Container, Typography } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";

const Analytics = () => {
    return (
        <>
            <Helmet>
                <title> Analytics | Ankit ERP </title>
            </Helmet>

            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Hi, Welcome back to Analytics 👋
                </Typography>
            </Container>
        </>
    );
}

export default Analytics;