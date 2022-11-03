import { Box, ButtonGroup } from "@mui/material";
import { styled, experimental_sx as sx } from "@mui/system";

export const HeaderWrapper = styled(Box)(
    sx({
        background: '#FFF',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '64px',
        pl: {
            xs: '74px',
            sm: '128px'
        },
        borderBottom: '1px solid #EBEBEB',
        position: 'fixed',
        zIndex: 1
    })
);

export const HeaderButtonsWrapper = styled(ButtonGroup)(
    sx({
        display: {
            xs: 'none',
            sm: 'flex'
        },
        gap: '10px',
        alignItems: 'center',
        mr: '50px' 
    })
);