import { Helmet } from 'react-helmet-async';

import { Container, Typography } from '@mui/material';

const AppPage = () => {
         
    return (
        <>
            <Helmet>
                <title> Dashboard | EventOPS </title>
            </Helmet>
            
            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Hi, Welcome back 👋
                </Typography>
            </Container>
        </>
    );
}

export default AppPage;
