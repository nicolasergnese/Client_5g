import SourceSansPro from './assets/fonts/SourceSansPro-Regular.ttf';
import Montserrat from './assets/fonts/Montserrat-Bold.ttf';
import { createTheme } from "@mui/material";

export const Theme = createTheme({
    palette: {
        background: {
            default: "#FFFFFF",
        },
        primary: { main: "#444444" },
        secondary: { main: "#EBEBEB" },
    },
    typography: {
        h1: {
            fontFamily: "Montserrat-Bold",
            fontSize: "1.3rem"
        },
        h2: {
            fontFamily: "Montserrat-Bold",
            fontSize: "1.1rem"
        },
        h3: {
            fontFamily: "Montserrat-Bold",
            fontSize: "1rem"
        },
        fontFamily: "SourceSansPro-Regular",
        button: {
            textTransform: "none",
        },
    },

    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                    font-family: 'SourceSansPro-Regular';
                    font-style: normal;
                    font-display: swap;
                    font-weight: 400;
                    src: local('SourceSansPro'), url(${SourceSansPro}) format('truetype');
                    unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
                }

                @font-face {
                    font-family: 'Montserrat-Bold';
                    font-style: normal;
                    font-display: swap;
                    font-weight: 700;
                    src: local('Montserrat'), url(${Montserrat}) format('truetype');
                    unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
                }
            `
        }
    }
});