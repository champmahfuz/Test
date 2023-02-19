import React from 'react';
import DashboardNavbar from '../../../DashboardNavbar/DashboardNavbar';
import Sidebar from '../../../Sidebar/Sidebar';
import PurchaseReport from './PurchaseReport/PurchaseReport';

const PurchaseReportOption = () => {
    return (
        <div className='list'>
            <Sidebar />
            <div className="listContainer">
                <DashboardNavbar />
                <PurchaseReport />
            </div>
        </div>
    );
};

export default PurchaseReportOption;