// Dashboard.jsx

import React, { useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";

import { retrieveUsers } from "../redux/slices/users";

const Dashboard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveUsers());
    }, [dispatch])

    const users = useSelector(state => state.users);

    return (
        <>
            <Helmet>
                <title> Dashboard | Ankit ERP </title>
            </Helmet>

            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Hi, Welcome back to Dashboard 👋
                </Typography>
                <div>
                    <h2>This all values get from redux store</h2>
                    {users &&
                        users.map((user) => (
                            <div key={user.id}>{user?.name}</div>
                        ))}
                </div>
            </Container>
        </>
    );
}

export default Dashboard;