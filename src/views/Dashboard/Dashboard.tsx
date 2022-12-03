import { Box, Divider } from "@mui/material";
import DashboardCard from "../../components/Dashboard/DashboardCard";
import EventLogsCard from "../../components/Dashboard/EventLogsCard";


export default function Dashboard() {
    
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
            <DashboardCard  />
            <Divider
                sx={{
                    margin: 'auto',
                    background: '#071739',
                    width: '80%',
                    mb: '38px'
                }}
            />
            <EventLogsCard />
        </Box>
    );
};