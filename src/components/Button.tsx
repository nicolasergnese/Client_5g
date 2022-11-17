import React from 'react';
import { Button as MuiButton } from "@mui/material";

import { IButton } from '../models/IButton';

const Button: React.FC<{style?: IButton, onClick: any, title: string}> = ({ style, onClick, title }) => {

    return (
        <MuiButton
            fullWidth
            onClick={onClick}
            color={style && style.color ? style.color : undefined}
            sx={{
                color: style && style.textColor ? style.textColor : '',
                background: style && style.background ? style.background : '',
                margin:"10px"
            }}
        >
            {title}
        </MuiButton>
    );
};

export default Button