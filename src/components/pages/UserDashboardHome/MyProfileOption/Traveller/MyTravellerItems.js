import React from 'react';
import DashboardNavbar from '../../../DashboardNavbar/DashboardNavbar';
import UserSidebar from '../../UserSidebar/UserSidebar';
import ManageTravellerList from './ManageTravellerList';

const MyTravellerItems = () => {
    return (
        <div className="list">
            <UserSidebar />
            <div className="listContainer">
                <DashboardNavbar />
                {/* <ManageProfileList /> */}
                <ManageTravellerList />
            </div>
        </div>
    );
};

export default MyTravellerItems;