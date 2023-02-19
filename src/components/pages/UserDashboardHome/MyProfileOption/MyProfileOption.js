import React from 'react';
import { Link } from 'react-router-dom';

const MyProfileOption = () => {
    return (
        <div>
            <Link to="/userDashboardHome/myProfile">
                <li>
                    <span>My Profile</span>
                </li>
            </Link>
        </div>
    );
};

export default MyProfileOption;