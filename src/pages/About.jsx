import { Container, Typography } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";

const About = () => {
    return (
        <>
            <Helmet>
                <title> About | Ankit ERP </title>
            </Helmet>

            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Hi, Welcome back to About 👋
                </Typography>
            </Container>
        </>
    );
}

export default About;