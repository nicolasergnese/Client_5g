import { Box, Divider } from "@mui/material";
import DashboardCard from "../../components/Dashboard/DashboardCard";
import EventLogsCard from "../../components/Dashboard/EventLogsCard";
import RequestService from "../../services/request";
import { useState, useEffect, useCallback } from 'react';
import { useAuth } from "react-oidc-context";

export default function Dashboard() {
    const auth = useAuth();
    const [nNetapps, setnNetapps] = useState(0)
    const [nNetServ, setnNetServ] = useState(0)
    const [nVnf, setnVnf] = useState(0)
    const [nVdu, setnVdu] = useState(0)
    const [eventLogs, setEventLogs] = useState({})
    //const prevCountRef = useRef(0);

    //console.log(props)
    const loadNetapps = useCallback(() => {
        RequestService.loadNetapps()
            .then((response) => {
                //console.log(response.data.length)
                //console.log(response.status !== 200 && response.status !== 201)
                if (response.status !== 200 && response.status !== 201)
                    auth.signoutRedirect()
                else {
                    if (response.data.length > 0)
                        setnNetapps(response.data.length)
                    else
                        setnNetapps(-1)
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
                    auth.signoutRedirect()
                else {
                    if (response.data.length > 0)
                        setnNetServ(response.data.length)
                    else
                        setnNetServ(-1)
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
                    auth.signoutRedirect()
                else {
                    if (response.data.length > 0)
                        setnVnf(response.data.length)
                    else
                        setnVnf(-1)
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
                    auth.signoutRedirect()
                else {
                    if (response.data.length > 0)
                        setnVdu(response.data.length)
                    else
                        setnVdu(-1)
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
                    auth.signoutRedirect()
                else {
                    if (response.data.length > 0)
                        setEventLogs(response.data)
                    else
                        setEventLogs(-1)
                    //prevCountRef.current = 5;
                }
            })
            .catch(function (error) {
                console.log(error);
                //props.showError("Username does not exists");
            });
    }, [auth])
    
    useEffect(() => {
        const loadAll = () => {

            if (nNetapps === 0) {
                console.log("loadNetapps")
                loadNetapps()
             
                //listCl();
            }
            if (nNetServ === 0) {
                console.log("loadNetworkservices")
                loadNetworkservices()
                
                //listCl();
            }
            if (nVnf === 0) {
                console.log("loadVnfs")
                loadVnfs()
               
                //listCl();
            }
            if (nVdu === 0) {
                console.log("loadVuds")
                loadVuds()
              
                //listCl();
            }
            if (Object.keys(eventLogs).length === 0) {
                console.log("loadEventlogs")
                loadEventlogs()
              
                //listCl();
            }
        }
        loadAll();
       // console.log(values);
    }, [loadNetapps,loadNetworkservices,loadVnfs,loadVuds,loadEventlogs,nNetServ,nNetapps,nVdu,nVnf,eventLogs]);
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
            <DashboardCard nNetServ={nNetServ} nNetapps={nNetapps} nVdu={nVdu} nVnf={nVnf} />
            <Divider
                sx={{
                    margin: 'auto',
                    background: '#071739',
                    width: '80%',
                    mb: '38px'
                }}
            />
            <EventLogsCard eventLogs={eventLogs} />
        </Box>
    );
};