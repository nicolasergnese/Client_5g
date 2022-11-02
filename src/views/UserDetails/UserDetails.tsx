import { Box } from "@mui/material";
import UserDetailsCard from "../../components/UserDetails/UserDetailsCard";

export default function UserDetails() {
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
                sm: '64px'
            },
            position: 'relative'
        }}>
            <UserDetailsCard />
        </Box>
    );
};