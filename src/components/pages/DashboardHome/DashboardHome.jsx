// import { Sidebar } from "../../Sidebar/Sidebar"
import Chart from "../Chart/Chart";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
import Featured from "../Featured/Featured";
import Sidebar from "../Sidebar/Sidebar";
import Table from "../Table/Table";
import Widget from "../Widgets/Widget";
// import Navigation from "../Shared/Navigation/Navigation"
import "./DashboardHome.scss"

export const DashboardHome = () => {
  return (
    <div className="dashboardHome">
      
        <Sidebar/>
        <div className="dashboardHomeContainer">
          {/* <Navigation/> */}
          <DashboardNavbar/>
          <div className="widgets">
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earning"/>
            <Widget type="balance"/>
          </div>
          <div className="charts">
            <Featured/>
            <Chart title='Last 6 months (Revenue)' aspect={2/1}/>
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transaction</div>
            <Table/>
          </div>
        </div>
        </div>
  );
};


export default DashboardHome;
