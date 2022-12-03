import { Box, CardContent, Typography, SvgIcon } from '@mui/material';
import { DashboardCardsWrapper, DashboardCards } from './styles';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
import RequestService from "../../services/request";
import { useState, useEffect, useCallback, useRef } from 'react';
import { useAuth } from "react-oidc-context";


const DashboardCard = () => {
    //console.log(nNetServ,nNetapps,nVdu,nVnf)
    const auth = useAuth();
    const [source, setSource] = useState({
        nNetapps: -1,
        nNetServ: -1,
        nVnf: -1,
        nVdu: -1,
    })
    //const prevCountRef = useRef(0);
    const counter = useRef(0)
    console.log(counter.current++)
    //console.log("auth")
    const loadNetapps = useCallback(() => {
        RequestService.loadNetapps()
            .then((response) => {
                //console.log(response.data.length)
                //console.log(response.status !== 200 && response.status !== 201)
                if (response.status !== 200 && response.status !== 201)
                    if (response.status === 401)
                        auth.signoutRedirect()
                    else
                        console.log("manage error")
                else {
                    if (response.data.length > 0)
                        setSource(source => ({
                            ...source,
                            nNetapps: response.data.length
                        }))
                    else
                        setSource(source => ({
                            ...source,
                            nNetapps: -1
                        }))
                    //prevCountRef.current = 1;
                }
            })
            .catch(function (error) {
                console.log(error);
                //props.showError("Username does not exists");
            });
    }, [auth])

    const loadNetworkservices = useCallback(() => {
        RequestService.loadNetworkservices()
            .then((response) => {
                //console.log(response.data.length)
                //console.log(response.status !== 200 && response.status !== 201)
                if (response.status !== 200 && response.status !== 201)
                    if (response.status === 401)
                        auth.signoutRedirect()
                    else
                        console.log("manage error")
                else {
                    if (response.data.length > 0)
                        setSource(source => ({
                            ...source,
                            nNetServ: response.data.length
                        }))
                    else
                        setSource(source => ({
                            ...source,
                            nNetServ: -1
                        }))
                    //prevCountRef.current = 2;
                }
            })
            .catch(function (error) {
                console.log(error);
                //props.showError("Username does not exists");
            });
    }, [auth])

    const loadVnfs = useCallback(() => {
        RequestService.loadVnfs()
            .then((response) => {
                //console.log(response.data.length)
                //console.log(response.status !== 200 && response.status !== 201)
                if (response.status !== 200 && response.status !== 201)
                    if (response.status === 401)
                        auth.signoutRedirect()
                    else
                        console.log("manage error")
                else {
                    if (response.data.length > 0)
                        setSource(source => ({
                            ...source,
                            nVnf: response.data.length
                        }))
                    else
                        setSource(source => ({
                            ...source,
                            nVnf: -1
                        }))
                    //prevCountRef.current = 3;
                }
            })
            .catch(function (error) {
                console.log(error);
                //props.showError("Username does not exists");
            });
    }, [auth])

    const loadVuds = useCallback(() => {
        RequestService.loadVnfs()
            .then((response) => {
                //console.log(response.data.length)
                //console.log(response.status !== 200 && response.status !== 201)
                if (response.status !== 200 && response.status !== 201)
                    if (response.status === 401)
                        auth.signoutRedirect()
                    else
                        console.log("manage error")
                else {
                    if (response.data.length > 0)
                        setSource(source => ({
                            ...source,
                            nVdu: response.data.length
                        }))
                    else
                        setSource(source => ({
                            ...source,
                            nVdu: -1
                        }))
                    //prevCountRef.current = 4;
                }
            })
            .catch(function (error) {
                console.log(error);
                //props.showError("Username does not exists");
            });
    }, [auth])



    const loadAll = useCallback(() => {
        //console.log("loadall")

        if (source.nNetapps === -1) {
            setSource(source => ({
                ...source,
                nNetapps: 0
            }))
            console.log("loadNetapps")
            loadNetapps()

            //listCl();
        }
        if (source.nNetServ === -1) {
            //console.log("loadNetworkservices")
            setSource(source => ({
                ...source,
                nNetServ: 0
            }))
            loadNetworkservices()

            //listCl();
        }
        if (source.nVnf === -1) {
            setSource(source => ({
                ...source,
                nVnf: 0
            }))
            //console.log("loadVnfs")
            loadVnfs()

            //listCl();
        }
        if (source.nVdu === -1) {
            setSource(source => ({
                ...source,
                nVdu: 0
            }))
            // console.log("loadVuds")
            loadVuds()

            //listCl();
        }

    }, [loadNetapps, loadNetworkservices, loadVnfs, loadVuds, source.nNetServ, source.nNetapps, source.nVdu, source.nVnf])

    useEffect(() => {
        // console.log("dashboard")
        loadAll();
        // console.log(values);
    }, [loadAll]);
    // if (auth && auth.user)
    // if (source.nNetapps === -1)
    //     setSource(source => ({
    //         ...source,
    //         nNetapps: 0
    //     }))
    const cards = [
        {
            name: 'NetApps',
            background: '#274684',
            color: '#FFF',
            icon: <LocalMallRoundedIcon />,
            value: source.nNetapps
        },
        {
            name: 'Network Services',
            background: '#b9d5fd',
            color: '#071739',
            icon: <MonetizationOnRoundedIcon />,
            value: source.nNetServ
        },
        {
            name: 'VNFs',
            background: '#709fdc',
            color: '#071739',
            icon: <PeopleAltRoundedIcon />,
            value: source.nVnf
        },
        {
            name: 'VDUs',
            background: '#FFF',
            color: '#071739',
            icon: <HowToRegRoundedIcon />,
            value: source.nVdu
        }
    ];

    return (
        <DashboardCardsWrapper>
            {cards.map(card =>
                <DashboardCards
                    key={card.name}
                    sx={{
                        background: card.background,
                        color: card.color,
                        border: card.name === 'VDUs' ? '1px solid #EBEBEB' : ''
                    }}
                >
                    <CardContent
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Box>
                            <Typography
                                sx={{
                                    mb: '10px',
                                    fontSize: '0.9rem',
                                    fontWeight: 600
                                }}
                            >
                                {card.name}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '1.25rem',
                                    fontWeight: 800
                                }}
                            >
                                {card.value}
                            </Typography>
                        </Box>
                        <SvgIcon fontSize="large">
                            {card.icon}
                        </SvgIcon>
                    </CardContent>
                </DashboardCards>
            )}
        </DashboardCardsWrapper>
    );
};

export default DashboardCard