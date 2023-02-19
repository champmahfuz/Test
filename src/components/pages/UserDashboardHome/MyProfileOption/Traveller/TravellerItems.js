import React from 'react';
import DashboardNavbar from '../../../DashboardNavbar/DashboardNavbar';
import UserSidebar from '../../UserSidebar/UserSidebar';
import ManageTravellerList from './ManageTravellerList';

const TravellerItems = () => {
    return (
        <div className="list">
            <UserSidebar />
            <div className="listContainer">
                <DashboardNavbar />
                <ManageTravellerList />
            </div>
        </div>
    );
};

export default TravellerItems;