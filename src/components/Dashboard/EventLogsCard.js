import { useNavigate } from 'react-router-dom';
import { Box, CardContent, Typography, Stepper, Step, Link, StepConnector, SvgIcon } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import { DashboardCards, EventLabels } from './styles';
import RequestService from "../../services/request";
import { useState, useEffect, useCallback, useRef } from 'react';
import { useAuth } from "react-oidc-context";

const EventLogsResume = () => {
    const auth = useAuth();
    const [source, setSource] = useState({
        eventLogs: {},
        mounting: true,
    })
    //const prevCountRef = useRef(0);
    const counter = useRef(0)
    console.log(counter.current++)

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

    useEffect(() => {
        // console.log("dashboard")
        if (Object.keys(source.eventLogs).length === 0 && source.mounting) {
            setSource(source => ({
                ...source,
                mounting: false
            }))
            //console.log("loadEventlogs")
            loadEventlogs()
            //listCl();
        }
        // console.log(values);
    }, [loadEventlogs,source.eventLogs,source.mounting]);

    //console.log(eventLogs);
    const events = []
    if (source.eventLogs && source.eventLogs.length > 0)
        source.eventLogs.forEach(element => {
            events.push({
                "name": element.object_type + ' "' + element.object_name + '" ' + element.action + " with ID " + element.object_id,
                "time": element.time
            })
        });

    const navigate = useNavigate();

    const Connector = () => {
        return (
            <StepConnector
                sx={{
                    ml: '11.5px',
                    "& span": {
                        mt: '-6.5px',
                        mb: '-6.5px',
                        minHeight: '34px'
                    }
                }}
            />
        )
    };

    const StepIcon = () => {
        return (
            <SvgIcon>
                <FiberManualRecordIcon />
            </SvgIcon>
        )
    };

    const LastStepIcon = () => {
        return (
            <SvgIcon>
                <FiberManualRecordOutlinedIcon />
            </SvgIcon>
        )
    }

    return (
        <Box
            style={{
                marginBottom: '64px'
            }}
        >
            <Typography
                color="primary"
                sx={{
                    fontWeight: 700,
                    maxWidth: '90%',
                    margin: 'auto auto 20px'
                }}
            >
                Event Logs
            </Typography>
            <DashboardCards
                sx={{
                    width: '80%',
                    height: 'auto',
                    border: '1px solid #EBEBEB',
                    margin: 'auto'
                }}
            >
                <CardContent>
                    <Stepper
                        orientation="vertical"
                        connector={<Connector />}
                        sx={{
                            mt: '10px',
                            pr: '10px'
                        }}
                    >
                        {events.map((event, index) =>
                            <Step key={index}>
                                <EventLabels
                                    sx={{
                                        "& circle": {
                                            fill: index === 3 ? '#444' : '#D6D6D6'
                                        }
                                    }}
                                    StepIconComponent={StepIcon}
                                >
                                    {event.name}
                                    <Typography align="right" color="primary" sx={{ fontSize: '0.875rem' }}>{event.time}</Typography>
                                </EventLabels>
                            </Step>
                        )}
                        <Step>
                            <EventLabels
                                StepIconComponent={LastStepIcon}
                            >
                                <Link onClick={() => navigate('/event-logs')}>
                                    view all
                                </Link>
                            </EventLabels>
                        </Step>
                    </Stepper>
                </CardContent>
            </DashboardCards>
        </Box>
    );
};

export default EventLogsResume