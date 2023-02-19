import React from 'react';
import DashboardNavbar from '../../DashboardNavbar/DashboardNavbar';
import UserSidebar from '../UserSidebar/UserSidebar';
import AllBookingList from './AllBookingList';

const AllBookingItem = () => {
    return (
        <div className="list">
            <UserSidebar />
            <div className="listContainer">
                <DashboardNavbar />
                <AllBookingList />
            </div>
        </div>
    );
};

export default AllBookingItem;