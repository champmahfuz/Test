import React from 'react';
import DashboardNavbar from '../../../../DashboardNavbar/DashboardNavbar';
import Sidebar from '../../../../Sidebar/Sidebar';
import ManageProductList from './ManageProductItem/ManageProductList/ManageProductList';

const ManageProductItem = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <DashboardNavbar />
                <ManageProductList />
                {/* <DataTable/> */}
            </div>
        </div>
    );
};

export default ManageProductItem;