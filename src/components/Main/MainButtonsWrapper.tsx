import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login  from "../Login/Login"

import { ButtonsWrapper } from './styles';


const MainButtonsWrapper: React.FC = () => {

    const navigate = useNavigate();

    return (
        <ButtonsWrapper>
            {/* <Button onClick={() => navigate('/login')} style={{ textColor: '#FFF', background: '#7A7A7A' }} title="Login" /> */}
            <Login/>           
            {/* <Button onClick={() => navigate('/register')} style={{ textColor: '#FFF', background: '#7A7A7A' }} title="Register" /> */}
        </ButtonsWrapper>
    );
};

export default MainButtonsWrapper