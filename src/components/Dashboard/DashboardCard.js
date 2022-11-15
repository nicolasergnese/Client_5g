import { Box,  CardContent, Typography, SvgIcon } from '@mui/material';
import { DashboardCardsWrapper, DashboardCards } from './styles';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';


const DashboardCard = ({nNetServ,nNetapps,nVdu,nVnf}) => {
    //console.log(nNetServ,nNetapps,nVdu,nVnf)
    if (nNetapps===-1)
        nNetapps=0
const cards = [
    {
        name: 'NetApps',
        background: '#444',
        color: '#FFF',
        icon: <LocalMallRoundedIcon />,
        value: nNetapps
    },
    {
        name: 'Network Services',
        background: '#D6D6D6',
        color: '#444',
        icon: <MonetizationOnRoundedIcon />,
        value: nNetServ
    },
    {
        name: 'VNFs',
        background: '#929292',
        color: '#444',
        icon: <PeopleAltRoundedIcon />,
        value:  nVnf
    },
    {
        name: 'VDUs',
        background: '#FFF',
        color: '#444',
        icon: <HowToRegRoundedIcon />,
        value:  nVdu
    }
];
    
    return (
        <DashboardCardsWrapper>
            {cards.map(card => 
                <DashboardCards
                    key={card.name}
                    sx={{
                        background: card.background,
                        color: card.color,
                        border: card.name === 'VDUs' ? '1px solid #EBEBEB' : ''
                    }}
                >
                    <CardContent
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                            <Box>
                                <Typography
                                    sx={{
                                        mb: '10px',
                                        fontSize: '0.9rem',
                                        fontWeight: 600
                                    }}
                                >
                                    {card.name}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '1.25rem',
                                        fontWeight: 800
                                    }}
                                >
                                    {card.value}
                                </Typography>
                            </Box>
                            <SvgIcon fontSize="large">
                                {card.icon}
                            </SvgIcon>
                    </CardContent>
                </DashboardCards>
            )}
        </DashboardCardsWrapper>
    );
};

export default DashboardCard