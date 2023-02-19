import React from 'react';
import DashboardNavbar from '../../../DashboardNavbar/DashboardNavbar';
import Sidebar from '../../../Sidebar/Sidebar';
import AddNewInvoice from './AddNewInvoice/AddNewInvoice';

const ManagePosOption = () => {
    return (
        <div className='list'>
            <Sidebar />
            <div className="listContainer">
                <DashboardNavbar />
                <AddNewInvoice />
            </div>
        </div>
    );
};

export default ManagePosOption;