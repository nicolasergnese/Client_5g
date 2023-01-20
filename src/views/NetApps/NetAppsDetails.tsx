import { Box } from "@mui/material";
import NetAppDetail from "../../components/NetApps/NetAppsDetail";

export default function NetAppsDetails() {
    return (
        <Box sx={{
            maxWidth: '1040px',
            width: {
                xs: '100%',
                sm: 'calc(100% - 128px)'
            },
            margin: 'auto',
            pt: '116px',
            pl: {
                xs: '0',
                sm: '0px'
            },
            position: 'relative'
        }}>
            <NetAppDetail />
        </Box>
    );
};