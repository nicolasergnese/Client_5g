import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';

export const cards = [
    {
        name: 'NetApps',
        background: '#444',
        color: '#FFF',
        icon: <LocalMallRoundedIcon />,
        value: 4
    },
    {
        name: 'Network Services',
        background: '#D6D6D6',
        color: '#444',
        icon: <MonetizationOnRoundedIcon />,
        value: 6
    },
    {
        name: 'VNFs',
        background: '#929292',
        color: '#444',
        icon: <PeopleAltRoundedIcon />,
        value: 10
    },
    {
        name: 'VDUs',
        background: '#FFF',
        color: '#444',
        icon: <HowToRegRoundedIcon />,
        value: 15
    }
];