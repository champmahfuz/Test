import React from 'react';
import DashboardNavbar from '../../../../DashboardNavbar/DashboardNavbar';
import Sidebar from '../../../../Sidebar/Sidebar';
import PurchaseProduct from './PurchaseProduct/PurchaseProduct';

const PurchaserProductOption = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <DashboardNavbar />
                <PurchaseProduct />
            </div>
        </div>
    );
};

export default PurchaserProductOption;