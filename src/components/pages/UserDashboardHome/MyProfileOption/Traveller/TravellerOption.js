import React from 'react';
import { Link } from 'react-router-dom';

const TravellerOption = () => {
    return (
        <div>
            <Link to="/userDashboardHome/myTraveller">
                <li>
                    <span>Traveller</span>
                </li>
            </Link>
        </div>
    );
};

export default TravellerOption;