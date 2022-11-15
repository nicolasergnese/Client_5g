import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Menu, MenuItem, Divider} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


import Logo from '../../../components/Logo';
import { HeaderWrapper, HeaderButtonsWrapper } from './styles';
import Logoutcomponent from "../../../components/Logout/Logout"

const Header: React.FC = () => {
    //console.log("header")
    let keys = Object.keys(sessionStorage);
   // console.log(JSON.parse(sessionStorage.getItem(keys[0])!))
    let data=null;

    if (keys.length>0)
        data = JSON.parse(sessionStorage.getItem(keys[0])!);

    // const email = null || data["profile"]["email"]
    let email= null 
    if (data !==null && data["profile"]["email"])
        email=data["profile"]["email"];
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
                    {email}
                </Button>
                <Logoutcomponent />
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
                    <MenuItem sx={{ color: '#A8A8A8' }} >
                       <Logoutcomponent />
                    </MenuItem>
                </Menu>
            </Box>
        </HeaderWrapper>
    );
};

export default Header