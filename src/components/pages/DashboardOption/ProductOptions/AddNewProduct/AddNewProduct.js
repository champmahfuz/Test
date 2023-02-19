import React from 'react';
import DashboardNavbar from '../../../DashboardNavbar/DashboardNavbar';
import Sidebar from '../../../Sidebar/Sidebar';
import InputField from './InputField/InputField';

const AddNewProduct = () => {
    return (
        <div className='list'>
            <Sidebar />
            <div className="listContainer">
                <DashboardNavbar />
                <InputField />
            </div>
        </div>
    );
};

export default AddNewProduct;