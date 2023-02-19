import React from 'react';
import DashboardNavbar from '../../../DashboardNavbar/DashboardNavbar';
import Sidebar from '../../../Sidebar/Sidebar';
import AddExpense from './AddExpense/AddExpense';

const AddExpenseOption = () => {
    return (
        <div className='list'>
            <Sidebar />
            <div className="listContainer">
                <DashboardNavbar />
                <AddExpense />
            </div>
        </div>
    );
};

export default AddExpenseOption;