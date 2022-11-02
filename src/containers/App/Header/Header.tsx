import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Typography, Button, Menu, MenuItem, Avatar, Divider, ListItemIcon } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Logout from '@mui/icons-material/Logout';

import Logo from '../../../components/Logo';

type Props = {
    expand: boolean
}

const Header: React.FC<Props> = ({ expand }) => {

    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                height: '64px',
                pl: {
                    xs: '74px',
                    sm: '128px'
                },
                borderBottom: '1px solid #EBEBEB',
                position: 'fixed'
            }}>
                <Logo variant="h1" title="Smart5Grid Platform" />
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', mr: '50px' }}>
                    <Typography color="primary">user@mail.com</Typography>
                    <Button sx={{ color: '#A8A8A8', ml: '10px', fontSize: '0.75rem' }} onClick={() => navigate('/')}>Logout</Button>
                </Box>
                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                <Button
                    endIcon={<KeyboardArrowDownIcon />}
                    onClick={handleClick}
                />
                    <Menu
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem
                            sx={{
                                color: '#444444'
                            }}
                            onClick={() => navigate('/user-details')}
                        >
                            user@mail.com
                        </MenuItem>
                        <Divider />
                        <MenuItem sx={{ color: '#A8A8A8' }} onClick={() => navigate('/')}>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>
            </Box>
        </Box>
    );
};

export default Header