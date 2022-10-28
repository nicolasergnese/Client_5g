import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from '../../views/Main/Main';
import routesArray from '../../routes';
import DefaultLayout from '../../components/Layout/default';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Theme } from '../../style';
import Navigation from './Navigation/Navigation';

const App: React.FC = () => {

    const location = useLocation();

    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline />
            {location.pathname !== '/' && location.pathname !== '/login' && location.pathname !== '/register' && <Navigation />}
            <Routes location={location}>
                <Route path="/" element={<Main />} />
                {routesArray.map((route: any) => (
                    <Route
                        key={route.key}
                        path={route.path}
                        element={route.parentComponent ?
                            <route.parentComponent>
                                <route.component />
                            </route.parentComponent> :

                            <DefaultLayout>
                                <route.component />
                            </DefaultLayout>
                        }
                    />
                ))}
            </Routes>
        </ThemeProvider>
    );
}

export default App;
