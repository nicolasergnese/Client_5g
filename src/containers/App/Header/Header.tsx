import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Menu, MenuItem, Divider, ListItemIcon } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Logout from '@mui/icons-material/Logout';

import Logo from '../../../components/Logo';
import { HeaderWrapper, HeaderButtonsWrapper } from './styles';

const Header: React.FC = () => {

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
        <HeaderWrapper>
            <Logo variant="h1" title="Smart5Grid Platform" />
            <HeaderButtonsWrapper>
                <Button
                    variant="text"
                    sx={{
                        fontSize: '1rem'
                    }}
                    onClick={() => navigate('/user-details')}
                    disableRipple
                >
                    user@mail.com
                </Button>
                <Button
                    variant="text"
                    sx={{
                        color: '#A8A8A8',
                        fontSize: '0.75rem'
                    }}
                    onClick={() => navigate('/')}
                >
                    Logout
                </Button>
            </HeaderButtonsWrapper>

            {/* smaller screens user menu */}
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
                    <MenuItem sx={{ color: '#444' }} onClick={() => navigate('/user-details')}>
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
        </HeaderWrapper>
    );
};

export default Header