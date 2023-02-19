import React from 'react';
import DashboardNavbar from '../../../DashboardNavbar/DashboardNavbar';
import UserSidebar from '../../UserSidebar/UserSidebar';
import EditProfileList from './EditProfileList';

const EditProfilesItems = () => {
    return (
        <div className="list">
            <UserSidebar />
            <div className="listContainer">
                <DashboardNavbar />
                <EditProfileList />
            </div>
        </div>
    );
};

export default EditProfilesItems;