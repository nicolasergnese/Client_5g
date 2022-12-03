import { useState,useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, CardContent, Typography, Button, Link, Pagination } from '@mui/material';
import { gridPageCountSelector, useGridApiContext, useGridSelector } from "@mui/x-data-grid";

import NewNetAppModal from './NewNetAppModal';
import { NetAppsWrapper, NetAppsTable } from './styles';

import RequestService from "../../services/request";
//import { useAuth } from "react-oidc-context";

const NetAppsCard = () => {
    const navigate = useNavigate();
    //const auth = useAuth();
    const [netApps, setNetApps] = useState([]);
    const [openCreate, setOpenCreate] = useState(false);   

    const loadNetapps = useCallback(() => {
        RequestService.loadNetapps()
            .then((response) => {
                console.log(response)
                //console.log(response.status !== 200 && response.status !== 201)
                if (response.status === 200 || response.status === 201) {
                    
                    if (response.data.length > 0)
                       {
                
                            setNetApps(response.data)
                        //console.log(temp);
                        //console.log(netApps)
                    }
                    else
                        setNetApps([])
                    //prevCountRef.current = 1;
                }
                else {
                    console.log(response)
                }
            })
            .catch(function (error) {
                console.log(error);
                //props.showError("Username does not exists");
            });
    }, [])
    useEffect(() => {
        // console.log("dashboard")
        loadNetapps();
        // console.log(values);
    }, [loadNetapps]);
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
            field: 'created_at',
            headerName: 'Created',
            sortable: false,
            flex: 2,
            renderCell: (cellValues) => new Date(new Date(cellValues.value).getFullYear(), new Date(cellValues.value).getMonth(), new Date(cellValues.value).getDate()).toLocaleString('en-UK', { day: '2-digit', month: 'short', year: 'numeric' })
        },
        {
            field: 'public',
            headerName: 'Visibility',
            sortable: false,
            flex: 2,
            renderCell: (cellValues) => (cellValues.value===true) ? "public":"private"
        },
        {
            field: 'show',
            headerName: '',
            sortable: false,
            flex: 1,
            renderCell: (cellValues) =>
                <Link
                    sx={{ margin: 'auto' }}
                    component="button"
                    variant="body2"
                    onClick={() => navigate('/netapps/details/' + cellValues.row.id)}
                >
                    Show
                </Link>
        },
        {
            field: 'delete',
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
    // if(netApps[0])
    // console.log(netApps[0].public===false)

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