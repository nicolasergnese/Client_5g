import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, CardContent, Typography, Stepper, Step, Link, StepConnector } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';

import { DashboardCards, EventLabels } from './styles';
import { events } from './events';

const EventLogsResume: React.FC = () => {

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
    }

    return (
        <Box
            style={{
                marginBottom: '64px'
            }}
        >
            <Typography
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
                    <Step key={event.name}>
                        <EventLabels
                            sx={{
                                "& circle": {
                                    fill: index === 3 ? '#444' : '#D6D6D6'
                                }
                            }}
                            StepIconComponent={FiberManualRecordIcon}
                        >
                            {event.name}
                            <Typography align="right" sx={{ fontSize: '0.875rem', color: '#929292' }}>{event.time}</Typography>
                        </EventLabels>
                    </Step>
                    )}
                    <Step>
                        <EventLabels
                            StepIconComponent={FiberManualRecordOutlinedIcon}
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