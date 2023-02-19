import React from 'react';
import DashboardNavbar from '../../DashboardNavbar/DashboardNavbar';
import Sidebar from '../../Sidebar/Sidebar';
import ViewProfile from './ViewProfile';

const ViewProfileOption = () => {
    return (
        <div className='list'>
            <Sidebar />
            <div className="listContainer">
                <DashboardNavbar />
                <ViewProfile />
            </div>
        </div>
    );
};

export default ViewProfileOption;