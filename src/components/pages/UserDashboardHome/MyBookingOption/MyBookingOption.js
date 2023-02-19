import React from 'react';
import { Link } from 'react-router-dom';

const MyBookingOption = () => {
    return (
        <div>
            <Link to="/userDashboardHome/myBooking">
                <li>
                    <span>My Booking</span>
                </li>
            </Link>
        </div>
    );
};

export default MyBookingOption;