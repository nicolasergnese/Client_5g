import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { useAuth } from "react-oidc-context";
import { ListItemIcon } from "@mui/material";
import Logout from '@mui/icons-material/Logout';
export default function LogoutComponent() {
    const auth = useAuth();
    console.log(auth);
    if (auth.isAuthenticated) {
        return (
            <Button onClick={() => { console.log("click"); void auth.signoutRedirect() }} sx={{ color: '#A8A8A8', fontSize: '0.75rem' }} variant="text">Logout</Button>
        );
    }
    else {
        console.log("not loged");
        return (
            <div></div>
        )
    }
};
