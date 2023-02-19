import React from 'react';
import DashboardNavbar from '../../../DashboardNavbar/DashboardNavbar';
import UserSidebar from '../../UserSidebar/UserSidebar';
import MySeetingsList from './MySeetingsList';

const MySeetingsItems = () => {
    return (
        <div className="list">
            <UserSidebar />
            <div className="listContainer">
                <DashboardNavbar />
                <MySeetingsList />
            </div>
        </div>
    );
};

export default MySeetingsItems;