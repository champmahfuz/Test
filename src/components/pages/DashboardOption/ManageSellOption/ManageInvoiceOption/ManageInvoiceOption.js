import React from 'react';
import DashboardNavbar from '../../../DashboardNavbar/DashboardNavbar';
import Sidebar from '../../../Sidebar/Sidebar';
import ManageInvoice from './ManageInvoice/ManageInvoice';

const ManageInvoiceOption = () => {
    return (
        <div className='list'>
            <Sidebar />
            <div className="listContainer">
                <DashboardNavbar />
                <ManageInvoice />
            </div>
        </div>
    );
};

export default ManageInvoiceOption;