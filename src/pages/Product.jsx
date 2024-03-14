import { Container, Typography } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";

const Product = () => {
    return (
        <>
            <Helmet>
                <title> Product | Ankit ERP </title>
            </Helmet>

            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Hi, Welcome back to Product 👋
                </Typography>
            </Container>
        </>
    );
}

export default Product;