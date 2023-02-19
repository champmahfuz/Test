import React from 'react';
import DashboardNavbar from '../../../DashboardNavbar/DashboardNavbar';
import Sidebar from '../../../Sidebar/Sidebar';
import AddNewCategory from './AddNewCategory/AddNewCategory';

const AddNewCategoryOption = () => {
    return (
        <div className='list'>
            <Sidebar />
            <div className="listContainer">
                <DashboardNavbar />
                <AddNewCategory />
            </div>
        </div>
    );
};

export default AddNewCategoryOption;