import React from 'react';
import DashboardNavbar from '../../../DashboardNavbar/DashboardNavbar';
import Sidebar from '../../../Sidebar/Sidebar';
import ManagePayment from './ManagePayment/ManagePayment';

const ManagePaymentOption = () => {
    return (
        <div className='list'>
            <Sidebar />
            <div className="listContainer">
                <DashboardNavbar />
                <ManagePayment />
            </div>
        </div>
    );
};

export default ManagePaymentOption;