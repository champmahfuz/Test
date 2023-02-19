import React from 'react';
import DashboardNavbar from '../../DashboardNavbar/DashboardNavbar';
import UserSidebar from '../UserSidebar/UserSidebar';
import ManageBookingList from './ManageBookingList';

const MyBookingItems = () => {
    return (
        <div className="list">
            <UserSidebar />
            <div className="listContainer">
                <DashboardNavbar />
                <ManageBookingList />
            </div>
        </div>
    );
};

export default MyBookingItems;