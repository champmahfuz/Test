import React from 'react';
import DashboardNavbar from '../../DashboardNavbar/DashboardNavbar';
import Sidebar from '../../Sidebar/Sidebar';
import ChangePassword from './ChangePassword';

const ChangePasswordOption = () => {
    return (
        <div className='list'>
            <Sidebar />
            <div className="listContainer">
                <DashboardNavbar />
                <ChangePassword />
            </div>
        </div>
    );
};

export default ChangePasswordOption;