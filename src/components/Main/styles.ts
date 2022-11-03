import { Box } from "@mui/material";
import { styled, experimental_sx as sx } from "@mui/system";

export const ButtonsWrapper = styled(Box)(
    sx({
        background: '#444444',
        borderRadius: '16px',
        padding: {
            xs: '55px 100px',
            sm: '55px 205px'
        },
        display: 'flex',
        flexDirection: 'column',
        gap: '35px'
    })
);