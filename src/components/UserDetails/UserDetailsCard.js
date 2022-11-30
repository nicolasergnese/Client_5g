import { useState, useEffect, useCallback } from 'react';

import { Box, CardContent, Typography, Button, Link } from '@mui/material';

import UploadKeyModal from './UploadKeyModal';
import { UserDetailsWrapper, SshKeysTable } from './styles';
import RequestService from "../../services/request";
import { useAuth } from "react-oidc-context";

const UserDetailsCard = () => {
    const auth = useAuth();
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const [openUpload, setOpenUpload] = useState(false);
    const loadUserDetail = useCallback(() => {
        RequestService.loadUserDetail()
            .then((response) => {
                //console.log(response.data.length)
                //console.log(response.status !== 200 && response.status !== 201)
                if (response.status !== 200 && response.status !== 201)
                    auth.signoutRedirect()
                else {
                    console.log(response)
                    if (response && response.data)
                        setUser(response.data);
                    else
                        setError("Errore");
                    // if (response.data.length > 0)
                    //     setUser(response.data.length)
                    // else
                    //     setnNetapps(-1)
                    //prevCountRef.current = 1;
                }
            })
            .catch(function (error) {
                console.log(error);
                //props.showError("Username does not exists");
            });
    }, [auth])

    useEffect(() => {
        if(user===null)
        loadUserDetail()
    }, [loadUserDetail,user]);

    const handleDelete = (e) => {
        RequestService.deleteSSH(e.id)
        .then((response) => {
            //console.log(response.data.length)
            //console.log(response.status !== 200 && response.status !== 201)
            console.log(response)
            if (response.status !== 200 && response.status !== 201)
                console.log(response)    
            //auth.signoutRedirect()
            else {
                
                if (response.status===200)
                    {
                        setUser({
                            ...user,
                            keys: user.keys.filter(key=>key.id!==e.id),
                        });
                        console.log(user)
                    }
                else
                    setError("Errore");
                // if (response.data.length > 0)
                //     setUser(response.data.length)
                // else
                //     setnNetapps(-1)
                //prevCountRef.current = 1;
            }
        })
        .catch(function (error) {
            console.log(error);
            //props.showError("Username does not exists");
        });
       
        
    };

    const columns = [
        {
            field: 'id',
            hide: true
        },
        {
            field: 'title',
            flex: .4
        },
        {
            field: 'key',
            flex: 2
        },
        {
            field: '',
            flex: .3,
            renderCell: () =>
                <Link
                    sx={{ margin: 'auto' }}
                    component="button"
                    variant="body2"
                // onClick={handleDelete}
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
                            {user &&
                                (<Box>
                                    <Typography color="primary">{user.firstName}</Typography>
                                    <Typography color="primary">{user.lastName}</Typography>
                                    <Typography color="primary">{user.email}</Typography>
                                    <Typography color="primary">{user.container_registry_secret}</Typography>
                                </Box>
                                )
                            }
                        </Box>
                        {user && (user.keys.length>0)&&(
                            <SshKeysTable
                                rows={user.keys}
                                onCellClick={handleDelete}
                                columns={columns}
                                hideFooter
                                disableSelectionOnClick
                                getRowHeight={() => 'auto'}
                                autoHeight
                                headerHeight={0}
                            />
                        )
                        }
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
            {/* <UploadKeyModal details={details} setDetails={setDetails} openUpload={openUpload} setOpenUpload={setOpenUpload} /> */}
        </>
    );
};

export default UserDetailsCard