import React from 'react';
import DashboardNavbar from '../../../DashboardNavbar/DashboardNavbar';
import Sidebar from '../../../Sidebar/Sidebar';
import ManageCustomer from './ManageCustomer/ManageCustomer';

const ManageCustomerList = () => {
    return (
        <div className='list'>
            <Sidebar />
            <div className="listContainer">
                <DashboardNavbar />
                <ManageCustomer />
            </div>
        </div>
    );
};

export default ManageCustomerList;