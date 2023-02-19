import React from 'react';
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';
import Widget from '../Widgets/Widget';
import UserSidebar from './UserSidebar/UserSidebar';
import Table from '../Table/Table';

const UserDashboardHome = () => {
    return (
        <div className="dashboardHome">
      
        <UserSidebar/>
        <div className="dashboardHomeContainer">
          {/* <Navigation/> */}
          <DashboardNavbar/>
          <div className="widgets">
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earning"/>
            <Widget type="balance"/>
          </div>
          
          <div className="listContainer">
            <div className="listTitle">Latest Transaction</div>
            <Table/>
          </div>
        </div>
        </div>
    );
};

export default UserDashboardHome;