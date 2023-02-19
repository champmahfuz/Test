import React from 'react';
import DashboardNavbar from '../../../DashboardNavbar/DashboardNavbar';
import UserSidebar from '../../UserSidebar/UserSidebar';
import ManageAddTravellerList from './ManageAddTravellerList';

const AddTravellerItems = () => {
    return (
        <div className="list">
            <UserSidebar />
            <div className="listContainer">
                <DashboardNavbar />
                <ManageAddTravellerList />
            </div>
        </div>
    );
};

export default AddTravellerItems;