import React from 'react';
import { Link } from 'react-router-dom';

const MySeetingsOptions = () => {
    return (
        <Link to="/userDashboardHome/mySeetings">
            <li>
                <span>Seetings</span>
            </li>
        </Link>
    );
};

export default MySeetingsOptions;