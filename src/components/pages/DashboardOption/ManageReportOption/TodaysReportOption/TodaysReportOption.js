import React from 'react';
import DashboardNavbar from '../../../DashboardNavbar/DashboardNavbar';
import Sidebar from '../../../Sidebar/Sidebar';
import TodaysReport from './TodaysReport/TodaysReport';

const TodaysReportOption = () => {
    return (
        <div className='list'>
            <Sidebar />
            <div className="listContainer">
                <DashboardNavbar />
                <TodaysReport />
            </div>
        </div>
    );
};

export default TodaysReportOption;