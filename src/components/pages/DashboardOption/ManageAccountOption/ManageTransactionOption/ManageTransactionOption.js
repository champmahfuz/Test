import React from 'react';
import DashboardNavbar from '../../../DashboardNavbar/DashboardNavbar';
import Sidebar from '../../../Sidebar/Sidebar';
import ManageTransaction from './ManageTransaction/ManageTransaction';

const ManageTransactionOption = () => {
    return (
        <div className='list'>
            <Sidebar />
            <div className="listContainer">
                <DashboardNavbar />
                <ManageTransaction />
            </div>
        </div>
    );
};

export default ManageTransactionOption;