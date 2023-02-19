import React from 'react';
import { Link } from 'react-router-dom';

const AllBookingOption = () => {
    return (
        <div>
            <Link to="/userDashboardHome/allBooking">
                <li>
                    <span>All Booking</span>
                </li>
            </Link>
        </div>
    );
};

export default AllBookingOption;