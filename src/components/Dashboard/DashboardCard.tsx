import React from 'react';

import { Box, Card, CardContent, Typography, SvgIcon } from '@mui/material';

import { DashboardCardsWrapper, DashboardCards } from './styles';

import { cards } from './cards';

const DashboardCard: React.FC = () => {

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