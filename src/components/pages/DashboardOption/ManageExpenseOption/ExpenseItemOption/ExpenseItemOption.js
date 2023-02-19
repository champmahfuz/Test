import React from 'react';
import DashboardNavbar from '../../../DashboardNavbar/DashboardNavbar';
import Sidebar from '../../../Sidebar/Sidebar';
import ManageExpense from './ManageExpense/ManageExpense';

const ExpenseItemOption = () => {
    return (
        <div className='list'>
            <Sidebar />
            <div className="listContainer">
                <DashboardNavbar />
                <ManageExpense />
            </div>
        </div>
    );
};

export default ExpenseItemOption;