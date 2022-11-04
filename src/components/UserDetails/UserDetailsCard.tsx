import React, { useState } from 'react';

import { Box, CardContent, Typography, Button, Link } from '@mui/material';
import { GridCellParams, GridColDef } from '@mui/x-data-grid';

import { userDetails } from './userDetails';
import UploadKeyModal from './UploadKeyModal';
import { UserDetailsWrapper, SshKeysTable } from './styles';

const UserDetailsCard: React.FC = () => {

    const [details, setDetails] = useState(userDetails);
    const [openUpload, setOpenUpload] = useState(false);

    const columns: GridColDef[] = [
        {
            field: 'id',
            hide: true
        },
        {
            field: 'name',
            flex: .4
        },
        {
            field: 'key',
            flex: 2
        },
        {
            field: '',
            flex: .3,
            renderCell: (cellValues: GridCellParams) => 
                <Link
                    sx={{ margin: 'auto' }}
                    component="button"
                    variant="body2"
                    onClick={() => setDetails({...details, sshKeys: details.sshKeys.filter(key => key.id !== cellValues.row.id) })}
                >
                    Delete
                </Link>
        },
    ];

    return (
        <>
            <Box
                style={{
                    marginBottom: '64px'
                }}
            >
                <UserDetailsWrapper>
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
                                <Typography color="primary">{details.firstName}</Typography>
                                <Typography color="primary">{details.lastName}</Typography>
                                <Typography color="primary">{details.email}</Typography>
                                <Typography color="primary">{details.containerRegistry}</Typography>
                            </Box>
                        </Box>
                        <SshKeysTable
                            rows={details.sshKeys}
                            columns={columns}
                            hideFooter
                            disableSelectionOnClick
                            getRowHeight={() => 'auto'}
                            autoHeight
                            headerHeight={0}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button
                                variant="contained"
                                onClick={() => setOpenUpload(true)}
                            >
                                Upload New Public Key
                            </Button>
                        </Box>
                    </CardContent>
                </UserDetailsWrapper>
            </Box>
            <UploadKeyModal details={details} setDetails={setDetails} openUpload={openUpload} setOpenUpload={setOpenUpload} />
        </>
    );
};

export default UserDetailsCard