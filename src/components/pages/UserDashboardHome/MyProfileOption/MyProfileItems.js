import React from 'react';
import DashboardNavbar from '../../DashboardNavbar/DashboardNavbar';
import UserSidebar from '../UserSidebar/UserSidebar';
import ManageProfileList from './ManageProfileList';

const MyProfileItems = () => {
    return (
        <div className="list">
            <UserSidebar />
            <div className="listContainer">
                <DashboardNavbar />
                <ManageProfileList />
            </div>
        </div>
    );
};

export default MyProfileItems;