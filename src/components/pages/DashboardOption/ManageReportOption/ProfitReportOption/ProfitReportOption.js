import React from 'react';
import DashboardNavbar from '../../../DashboardNavbar/DashboardNavbar';
import Sidebar from '../../../Sidebar/Sidebar';
import ProfitReport from './ProfitReport/ProfitReport';

const ProfitReportOption = () => {
    return (
        <div className='list'>
            <Sidebar />
            <div className="listContainer">
                <DashboardNavbar />
                <ProfitReport />
            </div>
        </div>
    );
};

export default ProfitReportOption;