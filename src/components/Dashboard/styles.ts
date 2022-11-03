import { Box, Card, StepLabel } from "@mui/material";
import { styled, experimental_sx as sx } from "@mui/system";

export const DashboardCardsWrapper = styled(Box)(
    sx({
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '21px',
        mb: '64px'
    })
);

export const DashboardCards = styled(Card)(
    sx({
        borderRadius: '12px',
        boxShadow: '0',
        width: '210px',
        height: '117px'
    })
);

export const EventLabels = styled(StepLabel)(
    sx({
        ml: '6.5px',
        p: 0,
        "& .MuiStepLabel-iconContainer": {
            pr: '15px'
        },
        "& .MuiStepLabel-labelContainer": {
            color: '#444!important',

        },
        "& svg": {
            width: '12px',
            height: '12px'
        },
        "& path": {
            fill: '#D6D6D6'
        },
        "& .MuiStepLabel-label": {
            display: 'flex',
            justifyContent: 'space-between'
        }
    })
);