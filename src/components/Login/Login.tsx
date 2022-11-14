import { Box } from "@mui/material";
import Button from "../Button";
import { useAuth } from "react-oidc-context";
export default function Login() {
    const auth = useAuth();

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
    return <Button onClick={() => void auth.signinRedirect()} style={{ textColor: '#FFF', background: '#7A7A7A' }} title="Login" />
};