import MainButtonsWrapper from "../../components/Main/MainButtonsWrapper";
import Logo from '../../components/Logo';
import { Box } from "@mui/material";

export default function Main() {
    return (
        <Box style={{ margin: 'auto', maxWidth: '570px', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '110px' }}>
            <Logo variant="h1" title="Smart5Grid Platform" />
            <MainButtonsWrapper />
        </Box>
    );
};