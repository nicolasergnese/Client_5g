import { Box } from "@mui/material";

import NetAppsCard from "../../components/NetApps/NetAppsCard";

export default function NetApps() {
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
            <NetAppsCard />
        </Box>
    );
};