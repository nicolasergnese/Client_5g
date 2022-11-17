import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, CardContent, Typography, Button, Link, Pagination } from '@mui/material';
import { gridPageCountSelector, useGridApiContext, useGridSelector } from "@mui/x-data-grid";

import { netAppsData } from './netApps';
import NewNetAppModal from './NewNetAppModal';
import { NetAppsWrapper, NetAppsTable } from './styles';

const NetAppsCard = () => {

    const navigate = useNavigate();

    const [netApps, setNetApps] = useState(netAppsData);
    const [openCreate, setOpenCreate] = useState(false);

    const columns = [
        {
            field: 'id',
            hide: true
        },
        {
            field: 'name',
            headerName: 'Name',
            sortable: false,
            flex: 2
        },
        {
            field: 'createdDate',
            headerName: 'Created',
            sortable: false,
            flex: 2,
            renderCell: (cellValues) => new Date(new Date(cellValues.value).getFullYear(), new Date(cellValues.value).getMonth(), new Date(cellValues.value).getDate()).toLocaleString('en-UK',{day: '2-digit', month: 'short', year: 'numeric'})
        },
        {
            field: 'visibility',
            headerName: 'Visibility',
            sortable: false,
            flex: 2
        },
        {
            field: 'description',
            headerName: '',
            sortable: false,
            flex: 1,
            renderCell: (cellValues) => 
                <Link
                    sx={{ margin: 'auto' }}
                    component="button"
                    variant="body2"
                    onClick={() => navigate('/netapps/details')}
                >
                    Show
                </Link>
        },
        {
            field: 'descriptorLink',
            headerName: '',
            sortable: false,
            flex: 1,
            renderCell: (cellValues) => 
                <Link
                    sx={{ margin: 'auto' }}
                    component="button"
                    variant="body2"
                    onClick={() => setNetApps(netApps.filter(netApp => netApp.id !== cellValues.row.id))}
                >
                    Delete
                </Link>
        },
    ];

    const TablePagination = () => {
        
        const apiRef = useGridApiContext();
        const pageCount = useGridSelector(apiRef, gridPageCountSelector);
        
        return <Pagination count={pageCount} onChange={(event, value) => apiRef.current.setPage(value - 1)} shape="rounded" hidePrevButton hideNextButton />
    }

    return (
        <>
            <Box
                style={{
                    marginBottom: '64px'
                }}
            >
                <NetAppsWrapper>
                    <CardContent sx={{ p: '24px' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography
                                fontWeight={700}
                                fontSize="large"
                                color="primary"
                            >
                                NetApps
                            </Typography>
                            <Button
                                variant="contained"
                                onClick={() => setOpenCreate(true)}
                            >
                                Create New
                            </Button>
                        </Box>
                        <NetAppsTable
                            rows={netApps}
                            columns={columns}
                            rowsPerPageOptions={[4]}
                            disableSelectionOnClick
                            pageSize={4}
                            disableColumnMenu
                            rowHeight={45}
                            autoHeight
                            pagination
                            components={{
                                Pagination: TablePagination
                            }}
                        />
                    </CardContent>
                </NetAppsWrapper>
            </Box>
            <NewNetAppModal netApps={netApps} setNetApps={setNetApps} openCreate={openCreate} setOpenCreate={setOpenCreate} />
        </>
    );
};

export default NetAppsCard;