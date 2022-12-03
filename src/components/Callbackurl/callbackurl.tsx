import { useEffect } from "react";
import { useAuth } from "react-oidc-context";
import { useNavigate } from 'react-router-dom';
export default function Callbackurl() {
    
    const navigate = useNavigate();
    const auth = useAuth();
    useEffect(() => {
        // console.log(auth.isAuthenticated)
        if (auth.isAuthenticated) {
            return navigate('/dashboard')
       }
        
    }, [auth,navigate])
    return (
        <div></div>
    )

};