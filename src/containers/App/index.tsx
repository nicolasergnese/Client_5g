import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from '../../views/Main/Main';
import routesArray from '../../routes';
import DefaultLayout from '../../components/Layout/default';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Theme } from '../../style';
import Navigation from './Navigation/Navigation';
import Header from './Header/Header';
import PrivateRoute from '../../components/Privateroute/PrivateRoute'
// import Loginv from '../../views/login/LoginV';

const App: React.FC = () => {

    const location = useLocation();

    const [expand, setExpand] = useState(false);
    const [auth, setAuth] = useState(false);
    console.log("app")
    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline />
            {auth && <Navigation expand={expand} setExpand={setExpand} />}
            {auth && <Header />}
            <Routes location={location}>
                <Route path="/" element={<Main />} />

                {/* <Route path="/loginv" element={<Loginv />} /> */}
                {routesArray.map((route: any) => (
                    <Route
                        key={route.key}
                        path={route.path}
                        element={
                            route.parentComponent ?
                                <PrivateRoute token={setAuth}>
                                    <route.parentComponent>
                                        <route.component />
                                    </route.parentComponent>
                                </PrivateRoute>
                                :
                                <PrivateRoute token={setAuth}>
                                    <DefaultLayout>
                                        <route.component />
                                    </DefaultLayout>
                                </PrivateRoute>
                        }
                    />
                ))}
            </Routes>
        </ThemeProvider>
    );
}

export default App;
