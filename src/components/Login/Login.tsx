import { Box, Typography } from "@mui/material";
import Button from "../Button";
import { useAuth } from "react-oidc-context";
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const auth = useAuth();
    const navigate = useNavigate();
    console.log(auth)
    const redirectTologin = () => {
		console.log("redirect")

		navigate('/loginv')
		//this.props.history.push('/')
	}

    switch (auth.activeNavigator) {
        case "signinSilent":
            return <Typography color="secondary" align="center">Signing you in...</Typography>;
        case "signoutRedirect":
            return <Typography color="secondary" align="center">Signing you out...</Typography>;
    }

    if (auth.isLoading) {
        return <Typography color="secondary" align="center">Loading...</Typography>;
    }

    if (auth.error) {
        return <Typography color="secondary" align="center">Oops... {auth.error.message}</Typography>;
    }
    return (
        <div>
            <Button onClick={() => void auth.signinRedirect()} style={{ textColor: '#FFF', background: '#7A7A7A' }} title="Login" />
            {/* <Button onClick={() => void redirectTologin()} style={{ textColor: '#FFF', background: '#7A7A7A' }} title="Login with interface" /> */}
        </div>)
};