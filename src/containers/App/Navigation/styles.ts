import { Box, ButtonGroup } from "@mui/material";
import { styled, experimental_sx as sx } from "@mui/system";

export const NavWrapper = styled(Box)(
    sx({
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        transition: 'width .4s ease-in-out, background .2s ease-in-out'
    })
);

export const NavButtonsWrapper = styled(ButtonGroup)(
    sx({
        flexDirection: 'column',
        gap: '20px',
        p: '0 11px 11px 11px'
    })
);