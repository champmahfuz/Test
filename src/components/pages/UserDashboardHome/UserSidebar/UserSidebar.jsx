import "./UserSidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import BookIcon from "@mui/icons-material/Book";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import ReviewsIcon from "@mui/icons-material/Reviews";
import MyBookingOption from "../MyBookingOption/MyBookingOption";
import AllBookingOption from "../AllBookingOption/AllBookingOption";
import HikingIcon from "@mui/icons-material/Hiking";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ReviewOption from "../Review/ReviewOption";
import MyProfileOption from "../MyProfileOption/MyProfileOption";
import TravellerOption from "../MyProfileOption/Traveller/TravellerOption";
import MySeetingsOptions from "../MyProfileOption/MySeetingsOption/MySeetingsOptions";
import img from "../img/logo.png";
export const UserSidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
          <img style={{ height: "40px", width: "100px" }} src={img} alt="" />
          {/* <span className="logo">Othooy</span> */}
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
          <li>
            <PersonOutlineIcon className="icon" />
            <MyProfileOption />
          </li>
          <li>
            <HikingIcon className="icon" />
            <TravellerOption />
          </li>
          <li>
            <BookIcon className="icon" />
            <MyBookingOption />
          </li>
          <li>
            <BookOnlineIcon className="icon" />
            <AllBookingOption />
          </li>
          <li>
            <ReviewsIcon className="icon" />
            <ReviewOption />
          </li>
          {/* <li>
                    <PaidIcon className="icon"/>
                    <span>Payment</span>
                </li> */}
          {/* <li>
                    <AddShoppingCartIcon className="icon"/>
                    <span>Add To Cart</span>
                </li> */}
          <li>
            <SettingsApplicationsIcon className="icon" />
            <MySeetingsOptions />
          </li>
          <li>
            {/* <AttachMoneyIcon className="icon" />
            <PaymentOption /> */}
            {/* <ManagePaymentOption /> */}
            {/* <UserPaymentOption /> */}
          </li>
          {/* <li>   
                <ExitToAppIcon className="icon"/>
                <span>Logout</span>
                </li> */}
        </ul>
      </div>
      {/* <div className='bottom'>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div> */}
    </div>
  );
};

export default UserSidebar;
