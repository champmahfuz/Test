import React from 'react';
import DashboardNavbar from '../../../DashboardNavbar/DashboardNavbar';
import Sidebar from '../../../Sidebar/Sidebar';
import AddNewCustomer from './AddNewCustomer/AddNewCustomer';

const AddCustomerOption = () => {
    return (
        <div className='list'>
            <Sidebar />
            <div className="listContainer">
                <DashboardNavbar />
                <AddNewCustomer />
            </div>
        </div>
    );
};

export default AddCustomerOption;