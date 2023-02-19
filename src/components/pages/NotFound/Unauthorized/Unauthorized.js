import React from 'react';
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    return (
        <div>
            <h1>Unauthorized</h1>
            <button onClick={ goBack }>GO BACK</button>
        </div>
    );
};

export default Unauthorized;