import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Card, CardContent, Typography, Button, TextField } from '@mui/material';
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';

import { userDetails } from './userDetails';

const UserDetailsCard: React.FC = () => {

    const columns: GridColDef[] = [
        {
            field: 'id',
            hide: true
        },
        {
            field: 'name',
            flex: .5
        },
        {
            field: 'key',
            flex: 2,
            renderCell: (cellValues: GridCellParams) => {
                return <div>
                    <Typography>{cellValues.row.keyType}</Typography>
                    <Typography>{cellValues.value}</Typography>
                </div>
            }
        },
        {
            field: '',
            flex: .5,
            renderCell: (cellValues: GridCellParams) => {
                return <Button>Delete</Button>
            }
        },
    ];

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
                <CardContent sx={{ p: '24px' }}>
                    <Typography fontWeight={700} fontSize="large" color="primary">User Details</Typography>
                    <Box sx={{ p: '20px 30px', display: 'flex', gap: '25px' }}>
                        <Box>
                            <Typography fontWeight={700} color="primary">First Name</Typography>
                            <Typography fontWeight={700} color="primary">Last Name</Typography>
                            <Typography fontWeight={700} color="primary">Email</Typography>
                            <Typography fontWeight={700} color="primary">Container Registry Secret</Typography>
                            <Typography fontWeight={700} color="primary">Code Repository SSH Keys</Typography>
                        </Box>
                        <Box>
                            <Typography color="primary">{userDetails.firstName}</Typography>
                            <Typography color="primary">{userDetails.lastName}</Typography>
                            <Typography color="primary">{userDetails.email}</Typography>
                            <Typography color="primary">{userDetails.containerRegistry}</Typography>
                        </Box>
                    </Box>
                    <DataGrid
                        rows={userDetails.sshKeys}
                        columns={columns}
                        hideFooter
                        disableSelectionOnClick
                        getRowHeight={() => 'auto'}
                        autoHeight
                        headerHeight={0}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button variant="contained">Upload New Public Key</Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default UserDetailsCard