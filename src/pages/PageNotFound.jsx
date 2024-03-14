import { Container, Typography } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";

const PageNotFound = () => {
    return (
        <>
            <Helmet>
                <title> PageNotFound | Ankit ERP </title>
            </Helmet>

            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Hi, Welcome back to PageNotFound 👋
                </Typography>
            </Container>
        </>
    );
}

export default PageNotFound;