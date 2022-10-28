import React from 'react';
import { Typography } from "@mui/material";

const Logo: React.FC<{variant?: "h1" | "h3", title: string}> = ({ variant, title }) => {

    return (
        <Typography variant={variant ? variant : "h2"} align="center" color="primary">{title}</Typography>
    );
};

export default Logo