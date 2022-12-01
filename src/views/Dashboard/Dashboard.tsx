import { Box, Divider } from "@mui/material";
import DashboardCard from "../../components/Dashboard/DashboardCard";
import EventLogsCard from "../../components/Dashboard/EventLogsCard";
import RequestService from "../../services/request";
import { useState, useEffect, useCallback, useRef } from 'react';
import { useAuth } from "react-oidc-context";

export default function Dashboard() {
    const auth = useAuth();
    const [source, setSource] = useState({
        nNetapps: -1,
        nNetServ: -1,
        nVnf: -1,
        nVdu: -1,
        eventLogs: {},
        mounting: true,
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

    const loadEventlogs = useCallback(() => {
        RequestService.loadEventlogs()
            .then((response) => {
                // console.log(response)
                //console.log(response.status !== 200 && response.status !== 201)
                if (response.status !== 200 && response.status !== 201)
                    if (response.status === 401)
                        auth.signoutRedirect()
                    else
                        console.log("manage error")
                else {
                    if (response.data.length > 0) {
                        setSource(source => ({
                            ...source,
                            eventLogs: response.data,
                            mounting: true
                        }))
                    }
                    else
                        setSource(source => ({
                            ...source,
                            eventLogs: -1
                        }))
                    //prevCountRef.current = 5;
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
        if (Object.keys(source.eventLogs).length === 0 && source.mounting) {
            setSource(source => ({
                ...source,
                mounting: false
            }))
            //console.log("loadEventlogs")
            loadEventlogs()
            //listCl();
        }
    }, [loadEventlogs, loadNetapps, loadNetworkservices, loadVnfs, loadVuds, source.eventLogs, source.mounting, source.nNetServ, source.nNetapps, source.nVdu,source.nVnf])

    useEffect(() => {
        // console.log("dashboard")
        loadAll();
        // console.log(values);
    }, [loadAll]);
    // if (auth && auth.user)
    return (
        <Box
            sx={{
                maxWidth: '1040px',
                width: {
                    xs: '100%',
                    sm: 'calc(100% - 128px)'
                },
                margin: 'auto',
                pt: '116px',
                pl: {
                    xs: '0',
                    sm: '64px'
                },
                position: 'relative'
            }}
        >
            <DashboardCard nNetServ={source.nNetServ} nNetapps={source.nNetapps} nVdu={source.nVdu} nVnf={source.nVnf} />
            <Divider
                sx={{
                    margin: 'auto',
                    background: '#071739',
                    width: '80%',
                    mb: '38px'
                }}
            />
            <EventLogsCard eventLogs={source.eventLogs} />
        </Box>
    );
};