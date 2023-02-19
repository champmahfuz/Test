import React from 'react';
import DashboardNavbar from '../../../DashboardNavbar/DashboardNavbar';
import Sidebar from '../../../Sidebar/Sidebar';
import SalesReport from './SalesReport/SalesReport';

const SalesReportOption = () => {
    return (
        <div className='list'>
            <Sidebar />
            <div className="listContainer">
                <DashboardNavbar />
                <SalesReport />
            </div>
        </div>
    );
};

export default SalesReportOption;