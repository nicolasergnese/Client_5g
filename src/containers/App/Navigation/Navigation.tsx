import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { IconButton, Typography } from '@mui/material';

import { NavWrapper, NavButtonsWrapper } from './styles';
import Logo from '../../../components/Logo';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import FlagRoundedIcon from '@mui/icons-material/FlagRounded';
import PieChartRoundedIcon from '@mui/icons-material/PieChartRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';

const Navigation: React.FC = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [expand, setExpand] = useState(false);

    const buttons = [
        {
            title: 'Dashboard',
            path: "/dashboard",
            icon: <HomeRoundedIcon />
        },
        {
            title: 'NetApps',
            path: "/netapps",
            icon: <FlagRoundedIcon />
        },
        {
            title: 'Network Services',
            path: "/network-services",
            icon: <PieChartRoundedIcon />
        },
        {
            title: 'VNFs',
            path: "/vnfs",
            icon: <EmailRoundedIcon />
        },
        {
            title: 'VDUs',
            path: "/vdus",
            icon: <PieChartRoundedIcon />
        },
        {
            title: 'Event Logs',
            path: "/event-logs",
            icon: <EventRoundedIcon />
        }
    ];

    return (
        <NavWrapper
            sx={{
                width: expand ? '260px' : '64px',
                background: {
                    xs: expand ? '#EBEBEB' : '#FFF',
                    sm: '#EBEBEB'
                }
            }}>
            <IconButton
                onClick={() => setExpand(!expand)}
                sx={{
                    background: expand ? '#EBEBEB!important' : '#444444!important',
                    color: expand ? '#444444' : '#FFF',
                    borderRadius: '0',
                    p: '20px',
                    mb: '23px',
                    justifyContent: 'space-between',
                    transition: 'background .4s ease-in-out, color .4s ease-in-out'
                }}
            >
                {expand ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
                {expand && <Logo variant="h3" title="Smart5Grid Platform" />}
            </IconButton>
            <NavButtonsWrapper
                sx={{
                    display: {
                        xs: expand ? 'flex' : 'none',
                        sm: 'flex'
                    }
                }}
            >
                {buttons.map(button => 
                    <IconButton
                        key={button.path}
                        color="primary"
                        sx={{ 
                            background: location.pathname === button.path ? '#FFF!important' : '',
                            borderRadius: '6px',
                            gap: expand ? '20px' : '',
                            justifyContent: expand ? 'flex-start' : 'center'
                        }}
                        onClick={() => navigate(button.path)}
                    >
                        {button.icon}
                        {expand && <Typography>{button.title}</Typography>}
                    </IconButton>
                )}
            </NavButtonsWrapper>
        </NavWrapper>
    );
};

export default Navigation