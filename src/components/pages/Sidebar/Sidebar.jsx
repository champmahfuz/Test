import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FaceIcon from "@mui/icons-material/Face";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import SellIcon from "@mui/icons-material/Sell";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ReportIcon from "@mui/icons-material/Report";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import PaidIcon from "@mui/icons-material/Paid";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import ManageProfile from "../DashboardOption/ManageProfile/ManageProfile";
import ManageProductOption from "../DashboardOption/ProductOptions/ManageProductOption/ManageProductOption";
import ManageSellOption from "../DashboardOption/ManageSellOption/ManageSellOption";
import ManageCustomerOption from "../DashboardOption/ManageCustomerOption/ManageCustomerOption";
import ManageAccountOption from "../DashboardOption/ManageAccountOption/ManageAccountOption";
import ManageReportOption from "../DashboardOption/ManageReportOption/ManageReportOption";
import ManageExpenseOption from "../DashboardOption/ManageExpenseOption/ManageExpenseOption";
import ManageLoanOption from "../DashboardOption/ManageLoanOption/ManageLoanOption";
export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
          <span className="logo">Othooy</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/dashboardhome/users">
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>

          <Link to="/dashboardhome/products">
            <li>
              <StoreIcon className="icon" />
              <ManageProductOption />
            </li>
          </Link>
          <li>
            <SellIcon className="icon" />
            <ManageSellOption />
          </li>
          <li>
            <FaceIcon className="icon" />
            <ManageCustomerOption />
          </li>
          <li>
            <CurrencyExchangeIcon className="icon" />
            <ManageAccountOption />
          </li>

          {/* <li>
                    <EventAvailableIcon className="icon"/>
                    <ManageStockOption/>
                </li> */}
          <li>
            <ReportIcon className="icon" />
            <ManageReportOption />
          </li>
          <li>
            <PaidIcon className="icon" />
            <ManageExpenseOption />
          </li>
          <li>
            <CreditScoreIcon className="icon" />
            <ManageLoanOption />
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Status</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notification</span>
          </li>
          <p className="title">SERVICE</p>

          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <ManageProfile />
          </li>
          <li>
            <ExitToAppIcon className="icon" />

            <span>LogOut</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
