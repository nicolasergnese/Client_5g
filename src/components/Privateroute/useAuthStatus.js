import { useState, useEffect, useCallback } from 'react'

export const useAuthStatus = ({ setAuth }) => {
    console.log("use auth status")
    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)
    const [d, setD] = useState(new Date(0))
    const newDate = useCallback(() => {
        setD(new Date(0));
    }, [])

    useEffect(() => {
        let key = Object.keys(sessionStorage)
        let storage_exp = sessionStorage.getItem(key);
        
        if (key === undefined || key === null || key.length === 0) {
            key = Object.keys(localStorage);
            storage_exp = localStorage.getItem(key)
        }
        else {
            storage_exp = sessionStorage.getItem(key);
        }
        let jsonstorage = JSON.parse(storage_exp);
        //console.log(storage_exp)


        if (jsonstorage)
        {
            d.setUTCSeconds(jsonstorage.expires_at)
            let time = new Date();
            console.log(d, time)
            console.log(d > time)
            if (d > time) {
                setLoggedIn(true)
                setAuth(true)
            }
            else {
                setLoggedIn(false)
                setAuth(false)
            }
        }
        setCheckingStatus(false)
    }, [newDate,d,setAuth]);
    
    return { loggedIn, checkingStatus }
}