import toArray from 'lodash.toarray';
import Main from './views/Main/Main';
import Login from './components/Login/Login';
import callback from './components/Callbackurl/callbackurl'
// import Register from './views/Register/Register';
import Dashboard from './views/Dashboard/Dashboard';
import UserDetails from './views/UserDetails/UserDetails';
import NetApps from './views/NetApps/NetApps';
import NetAppsDetails from './views/NetApps/NetAppsDetails';
import NetworkServices from './views/NetworkServices/NetworkServices';
import NetworkServicesDetails from './views/NetworkServices/NetworkServicesDetails';
import Vnfs from './views/VNFs/Vnfs';
import Vdus from './views/VDUs/Vdus';
import EventLogs from './views/EventLogs/EventLogs';

// Import page components below here
// Keep them organized as the routes object
// Define routes here

export const Routes = {
    Main: {
        key: 'main',
        name: 'Main',
        path: '/',
        component: Main,
        parentComponent: null,
        exact: false,
    },
    Login: {
        key: 'login',
        name: 'Login',
        path: '/login',
        component: Login,
        parentComponent: null,
        exact: false,
    },
    CallbackUrl: {
        key: 'callback',
        name: 'CallbackUrl',
        path: '/callbackurl',
        component: callback,
        parentComponent: null,
        exact: false,
    },
    // Register: {
    //     key: 'register',
    //     name: 'Register',
    //     path: '/register',
    //     component: Register,
    //     parentComponent: null,
    //     exact: false,
    // },
    Dashboard: {
        key: 'dashboard',
        name: 'Dashboard',
        path: '/dashboard',
        component: Dashboard,
        parentComponent: null,
        exact: false,
    },
    UserDetails: {
        key: 'userDetails',
        name: 'UserDetails',
        path: '/user-details',
        component: UserDetails,
        parentComponent: null,
        exact: false,
    },
    // NetApps: {
    //     key: 'netApps',
    //     name: 'NetApps',
    //     path: '/netapps',
    //     component: NetApps,
    //     parentComponent: null,
    //     exact: false,
    // },
    // NetAppsDetails: {
    //     key: 'netAppsDetails',
    //     name: 'NetAppsDetails',
    //     path: '/netapps/details',
    //     component: NetAppsDetails,
    //     parentComponent: null,
    //     exact: false,
    // },
    // NetworkServices: {
    //     key: 'networkServices',
    //     name: 'NetworkServices',
    //     path: '/network-services',
    //     component: NetworkServices,
    //     parentComponent: null,
    //     exact: false,
    // },
    // NetworkServicesDetails: {
    //     key: 'networkServicesDetails',
    //     name: 'NetworkServicesDetails',
    //     path: '/network-services/details',
    //     component: NetworkServicesDetails,
    //     parentComponent: null,
    //     exact: false,
    // },
    // Vnfs: {
    //     key: 'vnfs',
    //     name: 'Vnfs',
    //     path: '/vnfs',
    //     component: Vnfs,
    //     parentComponent: null,
    //     exact: false,
    // },
    // Vdus: {
    //     key: 'vdus',
    //     name: 'Vdus',
    //     path: '/vdus',
    //     component: Vdus,
    //     parentComponent: null,
    //     exact: false,
    // },
    // EventLogs: {
    //     key: 'eventLogs',
    //     name: 'EventLogs',
    //     path: '/event-logs',
    //     component: EventLogs,
    //     parentComponent: null,
    //     exact: false,
    // },
};

// Maps don't work on object convert it to an array
export default toArray(Routes);