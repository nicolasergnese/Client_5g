import { Box, Divider } from "@mui/material";
import DashboardCard from "../../components/Dashboard/DashboardCard";
import EventLogsCard from "../../components/Dashboard/EventLogsCard";
import RequestService from "../../services/request";

export default function Dashboard() {
    
    const load = () => {
        RequestService.load()
            .then((response) => {
                console.log(response)
                if (response.status !== 200 || response.status !== 201)
                    console.log(response)
            })
            .catch(function (error) {
                console.log(error);
                 //props.showError("Username does not exists");
            });
    }
    load()
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
            <DashboardCard />
            <Divider
                sx={{
                    margin: 'auto',
                    background: '#444',
                    width: '80%',
                    mb: '38px'
                }}
            />
            <EventLogsCard />
        </Box>
    );
};