import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Card, CardContent, Typography, Button } from '@mui/material';

const UserDetailsCard: React.FC = () => {

    return (
        <Box
            style={{
                marginBottom: '64px'
            }}
        >
            <Card
                sx={{
                    borderRadius: '12px',
                    boxShadow: '0',
                    width: '80%',
                    border: '1px solid #EBEBEB',
                    margin: '64px auto'
                }}
            >
                <CardContent>
                    <Typography>User Details</Typography>
                    <Typography>First Name</Typography>
                    <Typography>Last Name</Typography>
                    <Typography>Email</Typography>
                    <Typography>Container Registry Secret</Typography>
                    <Typography>Code Repository SSH Keys</Typography>
                    <Button variant="contained">Upload New Public Key</Button>
                </CardContent>
            </Card>
        </Box>
    );
};

export default UserDetailsCard