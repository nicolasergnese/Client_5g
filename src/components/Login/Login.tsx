import { Box } from "@mui/material";
import Button from "../Button";
import { useAuth } from "react-oidc-context";
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const auth = useAuth();
    const navigate = useNavigate();
    
    const redirectTologin = () => {
		console.log("redirect")

		navigate('/loginv')
		//this.props.history.push('/')
	}

    switch (auth.activeNavigator) {
        case "signinSilent":
            return <div>Signing you in...</div>;
        case "signoutRedirect":
            return <div>Signing you out...</div>;
    }

    if (auth.isLoading) {
        return <div>Loading...</div>;
    }

    if (auth.error) {
        return <div>Oops... {auth.error.message}</div>;
    }
    return (
        <div>
            <Button onClick={() => void auth.signinRedirect()} style={{ textColor: '#FFF', background: '#7A7A7A' }} title="Login with Oidc" />
            {/* <Button onClick={() => void redirectTologin()} style={{ textColor: '#FFF', background: '#7A7A7A' }} title="Login with interface" /> */}
        </div>)
};