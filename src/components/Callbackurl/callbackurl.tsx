import { useEffect } from "react";
import { useAuth } from "react-oidc-context";
import { useNavigate } from 'react-router-dom';
export default function Callbackurl() {
    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        //console.log(auth.isAuthenticated)
        if (auth.isAuthenticated) {
            return navigate('/dashboard')
        }
        
    }, [auth])



};