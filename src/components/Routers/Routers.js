import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from '../../hooks/RequireAuth';
import Login from '../auth/Login/Login';
import PersistLogin from '../auth/PersistLogin/PersistLogin';
import Register from '../auth/Register/Register';
import TransactionHistory from '../dashboard/DashboardRoutes/UserRoutes/TransactionHistory/TransactionHistory';
import UserBookings from '../dashboard/DashboardRoutes/UserRoutes/UserBookings/UserBookings';
import UserProfile from '../dashboard/DashboardRoutes/UserRoutes/UserProfile/UserProfile';
import Dashboards from '../dashboard/Dashboards/Dashboards';
import BlogDetails from '../pages/Blogs/BlogDetails/BlogDetails';
import Blogs from '../pages/Blogs/Blogs/Blogs';
import Contact from '../pages/Contact/Contact';
import AboutUs from '../pages/Home/AboutUs/AboutUs';
import Home from '../pages/Home/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import Unauthorized from '../pages/NotFound/Unauthorized/Unauthorized';
import FlightSearchs from '../pages/SearchBoxes/Flight/FlightSearch/FlightSearchs/FlightSearchs';
import Services from '../pages/Services/Services/Services';
import { DashboardHome } from '../pages/DashboardHome/DashboardHome';
import List from '../pages/List/List';
import New from '../pages/New/New';
import Single from '../pages/Single/Single';
import { productInputs, userInputs } from '../../formSource';
import AddNewProduct from '../pages/DashboardOption/ProductOptions/AddNewProduct/AddNewProduct';
import ManageProductItem from '../pages/DashboardOption/ProductOptions/AddNewProduct/ManageProduct/ManageProductItem';
import PurchaserProductOption from '../pages/DashboardOption/ProductOptions/AddNewProduct/PurchaserProductOption/PurchaserProductOption';
import AddNewCategoryOption from '../pages/DashboardOption/ProductOptions/AddNewCategotyOption/AddNewCategoryOption';
import ManageInvoiceOption from '../pages/DashboardOption/ManageSellOption/ManageInvoiceOption/ManageInvoiceOption';
import ManagePosOption from '../pages/DashboardOption/ManageSellOption/ManagePosOption/ManagePosOption';
import AddCustomerOption from '../pages/DashboardOption/ManageCustomerOption/AddCustomerOption/AddCustomerOption';
import ManageCustomerList from '../pages/DashboardOption/ManageCustomerOption/ManageCustomerList/ManageCustomerList';
import ManagePaymentOption from '../pages/DashboardOption/ManageAccountOption/ManagePaymentOption/ManagePaymentOption';
import ManageTransactionOption from '../pages/DashboardOption/ManageAccountOption/ManageTransactionOption/ManageTransactionOption';
import UserLogin from '../UserFile/UserLogin/UserLogin';
import UserRegister from '../UserFile/UserRegister/UserRegister';
import PurchaseReportOption from '../pages/DashboardOption/ManageReportOption/PurchaseReportOption/PurchaseReportOption';
import SalesReportOption from '../pages/DashboardOption/ManageReportOption/SalesReportOption/SalesReportOption';
import ProfitReportOption from '../pages/DashboardOption/ManageReportOption/ProfitReportOption/ProfitReportOption';
import TodaysReportOption from '../pages/DashboardOption/ManageReportOption/TodaysReportOption/TodaysReportOption';
import ExpenseItemOption from '../pages/DashboardOption/ManageExpenseOption/ExpenseItemOption/ExpenseItemOption';
import AddExpenseOption from '../pages/DashboardOption/ManageExpenseOption/AddExpenseOption/AddExpenseOption';
import FlightSearchsv2 from '../pages/SearchBoxes/Flight/FlightSearch/FlightSearchs/FlightSearchsv2';
import FlightSearchsv3 from '../pages/SearchBoxes/Flight/FlightSearch/FlightSearchs/FlightSearchsv3';
import Booking from '../pages/SearchBoxes/Flight/FlightSearch/Booking/Booking';
import Navbar from '../UserFile/UserLogin/Navbar/Navbar';
import UserDashboard from '../UserFile/UserLogin/AllDashboard/UserDashboard';
import UserDashboardHome from '../pages/UserDashboardHome/UserDashboardHome';
import MyBookingItems from '../pages/UserDashboardHome/MyBookingOption/MyBookingItems';
import AllBookingItem from '../pages/UserDashboardHome/AllBookingOption/AllBookingItem';
import ReviewItem from '../pages/UserDashboardHome/Review/ReviewItem';
import MyProfileItems from '../pages/UserDashboardHome/MyProfileOption/MyProfileItems';
import EditProfilesItems from '../pages/UserDashboardHome/MyProfileOption/EditProfileOption/EditProfilesItems';
import AddTravellerItems from '../pages/UserDashboardHome/MyProfileOption/Traveller/AddTravellerItems';
import MyTravellerItems from '../pages/UserDashboardHome/MyProfileOption/Traveller/MyTravellerItems';
import MySeetingsItems from '../pages/UserDashboardHome/MyProfileOption/MySeetingsOption/MySeetingsItems';
import ChangePasswordOption from '../pages/DashboardOption/ManageProfile/ChangePasswordOption';
import ViewProfileOption from '../pages/DashboardOption/ManageProfile/ViewProfileOption';
import RequireAuthV1 from '../UserFile/UserLogin/RequireAuthV1';
import DashboardHomeV1 from '../pages/DashboardV1/DashboardHomeV1/DashboardHomeV1';
import ChangePasswordList from '../pages/UserDashboardHome/MyProfileOption/MySeetingsOption/ChangePasswordList';
import ManageProfileList from '../pages/UserDashboardHome/MyProfileOption/ManageProfileList';
import ManageTravellerList from '../pages/UserDashboardHome/MyProfileOption/Traveller/ManageTravellerList';
import ManageAddTravellerList from '../pages/UserDashboardHome/MyProfileOption/Traveller/ManageAddTravellerList';
import ManageBookingList from '../pages/UserDashboardHome/MyBookingOption/ManageBookingList';
import AllBookingList from '../pages/UserDashboardHome/AllBookingOption/AllBookingList';
import ReviewList from '../pages/UserDashboardHome/Review/ReviewList';
import MySeetingsList from '../pages/UserDashboardHome/MyProfileOption/MySeetingsOption/MySeetingsList';
import EditProfileList from '../pages/UserDashboardHome/MyProfileOption/EditProfileOption/EditProfileList';
import AdminDashboardHome from '../pages/Admin DashboardV1/AdminDashboardHomeV1/AdminDashboardHome';
import AdminUser from '../pages/Admin DashboardV1/AdminUser/AdminUser';
import AddNewCategory from '../pages/DashboardOption/ProductOptions/AddNewCategotyOption/AddNewCategory/AddNewCategory';
import PurchaseProduct from '../pages/DashboardOption/ProductOptions/AddNewProduct/PurchaserProductOption/PurchaseProduct/PurchaseProduct';
import InputField from '../pages/DashboardOption/ProductOptions/AddNewProduct/InputField/InputField';
import ManageProductList from '../pages/DashboardOption/ProductOptions/AddNewProduct/ManageProduct/ManageProductItem/ManageProductList/ManageProductList';
import AddNewInvoice from '../pages/DashboardOption/ManageSellOption/ManagePosOption/AddNewInvoice/AddNewInvoice';
import ManageInvoice from '../pages/DashboardOption/ManageSellOption/ManageInvoiceOption/ManageInvoice/ManageInvoice';
import AddNewCustomer from '../pages/DashboardOption/ManageCustomerOption/AddCustomerOption/AddNewCustomer/AddNewCustomer';
import ManageCustomer from '../pages/DashboardOption/ManageCustomerOption/ManageCustomerList/ManageCustomer/ManageCustomer';
import ManagePayment from '../pages/DashboardOption/ManageAccountOption/ManagePaymentOption/ManagePayment/ManagePayment';
import ManageTransaction from '../pages/DashboardOption/ManageAccountOption/ManageTransactionOption/ManageTransaction/ManageTransaction';
import PurchaseReport from '../pages/DashboardOption/ManageReportOption/PurchaseReportOption/PurchaseReport/PurchaseReport';
import SalesReport from '../pages/DashboardOption/ManageReportOption/SalesReportOption/SalesReport/SalesReport';
import ProfitReport from '../pages/DashboardOption/ManageReportOption/ProfitReportOption/ProfitReport/ProfitReport';
import TodaysReport from '../pages/DashboardOption/ManageReportOption/TodaysReportOption/TodaysReport/TodaysReport';
import ManageExpense from '../pages/DashboardOption/ManageExpenseOption/ExpenseItemOption/ManageExpense/ManageExpense';
import AddExpense from '../pages/DashboardOption/ManageExpenseOption/AddExpenseOption/AddExpense/AddExpense';
// import UserPaymentItems from '../pages/UserDashboardHome/UserPaymentOption/UserPaymentItems';
// import UserManageCardPaytment from '../pages/UserDashboardHome/UserPaymentOption/ManagePaymentOption/UserManageCardPaytment';
// import UserManageMobileBanking from '../pages/UserDashboardHome/UserPaymentOption/ManagePaymentOption/UserManageMobileBanking';
import Payment from '../pages/payment/Payment';
import TestComponent from '../pages/TestComponent/TestComponent';
import UserPayment from '../pages/DashboardV1/PaymentModal/UserPayment';


const ROLES = {
    'User': 2001,
    'Editor': 1984,
    'Admin': 5150
}

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/TestComponent" element={<TestComponent />} />
                <Route path="/UserPayment" element={<UserPayment />} />
                <Route path="Services" element={<RequireAuthV1>
                    <Services />
                </RequireAuthV1>}>

                </Route>
                <Route path="navbar" element={<Navbar />}></Route>
                <Route path="userDashboard" element={<UserDashboard />}></Route>
                {/* <Route path="/Services" element={<UserRequireAuth>
                    <Services />
                </UserRequireAuth>}>
                </Route> */}
                <Route path="Contact" element={<Contact />}></Route>
                {/* add comment */}
                <Route path="About" element={<AboutUs />}></Route>
                <Route path="Blogs" element={<Blogs />} />
                <Route path="Blogs/:slug" element={<BlogDetails />} />
                <Route path="Payment/:id" element={<Payment />} />
                <Route path="FlightSearchs" element={<FlightSearchs />} />
                <Route path="FlightSearchsv2" element={<FlightSearchsv2 />} />
                <Route path="FlightSearchsv3" element={<FlightSearchsv3 />} />
                <Route path="Booking" element={<Booking />} />
                {/* <Route path="Flight/:Searchs" element={ <FlightSearchs /> } /> */}
                <Route path="login" element={<Login />} />
                <Route path="Register" element={<Register />} />
                <Route path="Unauthorized" element={<Unauthorized />} />

                {/* For user route start here */}
                {/* <Route path="userLogin" element={<UserLogin />} />
                <Route path="userRegister" element={<UserRegister />} /> */}
                <Route path="account">
                    <Route path="signin" element={<UserLogin />} />
                    <Route path="signup" element={<UserRegister />} />
                </Route>
                {/* For user route end here */}

                {/* dashboard route */}
                <Route path="dashboardhome">
                    <Route index element={<DashboardHome />} />

                    <Route path="users">
                        <Route index element={<List />} />
                        <Route path=":userId" element={<Single />} />
                        <Route path="new" element={<New inputs={userInputs} title='Add New User' />} />
                    </Route>

                    <Route path="products">
                        <Route index element={<List />} />
                        <Route path=":productId" element={<Single />} />
                        <Route path="new" element={<New inputs={productInputs} title='Add New Products' />} />
                    </Route>
                    <Route path="addNewProduct">
                        <Route index element={<AddNewProduct />} />
                    </Route>
                    <Route path="manageProduct">
                        <Route index element={<ManageProductItem />} />
                    </Route>
                    <Route path="purchaseProduct">
                        <Route index element={<PurchaserProductOption />} />
                    </Route>
                    <Route path="addNewCategory">
                        <Route index element={<AddNewCategoryOption />} />
                    </Route>
                    <Route path="manageInvoice">
                        <Route index element={<ManageInvoiceOption />} />
                    </Route>
                    <Route path="addNewInvoice">
                        <Route index element={<ManagePosOption />} />
                    </Route>
                    <Route path="addNewCustomer">
                        <Route index element={<AddCustomerOption />} />
                    </Route>
                    <Route path="manageCustomer">
                        <Route index element={<ManageCustomerList />} />
                    </Route>
                    <Route path="managePayment">
                        <Route index element={<ManagePaymentOption />} />
                    </Route>
                    <Route path="manageTransaction">
                        <Route index element={<ManageTransactionOption />} />
                    </Route>
                    <Route path="purchaseReport">
                        <Route index element={<PurchaseReportOption />} />
                    </Route>
                    <Route path="salesReport">
                        <Route index element={<SalesReportOption />} />
                    </Route>
                    <Route path="profitReport">
                        <Route index element={<ProfitReportOption />} />
                    </Route>
                    <Route path="todaysReport">
                        <Route index element={<TodaysReportOption />} />
                    </Route>
                    <Route path="expenseItem">
                        <Route index element={<ExpenseItemOption />} />
                    </Route>
                    <Route path="addExpense">
                        <Route index element={<AddExpenseOption />} />
                    </Route>
                    <Route path="viewProfile">
                        <Route index element={<ViewProfileOption />} />
                    </Route>
                    <Route path="changePassword">
                        <Route index element={<ChangePasswordOption />} />
                    </Route>

                </Route>

                {/* dashboard route ends here */}

                {/* user dashboard route starts here */}
                <Route path='userDashboardHome'>
                    <Route index element={<UserDashboardHome />} />
                    <Route path="myBooking">
                        <Route index element={<MyBookingItems />} />
                    </Route>
                    <Route path="myProfile">
                        <Route index element={<MyProfileItems />} />
                    </Route>
                    <Route path="myTraveller">
                        <Route index element={<MyTravellerItems />} />
                    </Route>
                    <Route path="mySeetings">
                        <Route index element={<MySeetingsItems />} />
                    </Route>

                    <Route path='editProfile'>
                        <Route index element={<EditProfilesItems />} />
                    </Route>
                    <Route path='addTraveller'>
                        <Route index element={<AddTravellerItems />} />
                    </Route>
                    {/* <Route path='userPayment'>
                        <Route index element={<UserPaymentItems />} />
                    </Route> */}
                    {/* <Route path='mySeetings'>
                        <Route index element={<ProfileSeetingsList />} />
                    </Route> */}
                    <Route path="allBooking">
                        <Route index element={<AllBookingItem />} />
                    </Route>
                    <Route path="review">
                        <Route index element={<ReviewItem />} />
                    </Route>
                </Route>
                {/* user dashboard route ends here */}


                {/* User Dashboard v1 starts */}
                <Route path="/dashboard/*" element={<DashboardHomeV1 />} />
                <Route path="ChangePassword" element={<ChangePasswordList />}></Route>
                <Route path="profile" element={<ManageProfileList />}></Route>
                <Route path="traveller" element={<ManageTravellerList />}></Route>
                <Route path="addTraveller" element={<ManageAddTravellerList />}></Route>
                <Route path="MyBooking" element={<ManageBookingList />}></Route>
                <Route path="AllBooking" element={<AllBookingList />}></Route>
                <Route path="Review" element={<ReviewList />}></Route>
                <Route path="Seetings" element={<MySeetingsList />}></Route>
                <Route path="EditProfile" element={<EditProfileList />}></Route>
                <Route />
                {/* User Dashboard v1 end */}

                {/* Admin Dashboard V1 starts */}
                <Route path="/AdminDashboardHomeV1/*" element={<AdminDashboardHome />} />
                <Route path="AdminUser" element={<AdminUser />} />
                <Route path="AddNewPackage" element={<AddNewCategory />} />
                <Route path="PurchasePackage" element={<PurchaseProduct />} />
                <Route path="AddNewPackageProduct" element={<InputField />} />
                <Route path="ManagePackage" element={<ManageProductList />} />
                <Route path="AddNewInvoice" element={<AddNewInvoice />} />
                <Route path="ManageInvoice" element={<ManageInvoice />} />
                <Route path="AddNewCustomer" element={<AddNewCustomer />} />
                <Route path="ManageCustomer" element={<ManageCustomer />} />
                <Route path="ManagePayment" element={<ManagePayment />} />
                <Route path="ManageTransaction" element={<ManageTransaction />} />
                <Route path="PurchaseReport" element={<PurchaseReport />} />
                <Route path="SalesReport" element={<SalesReport />} />
                <Route path="ProfitReport" element={<ProfitReport />} />
                <Route path="TodaysReport" element={<TodaysReport />} />
                <Route path="ManageExpense" element={<ManageExpense />} />
                <Route path="AddExpense" element={<AddExpense />} />
                <Route />
                {/* Admin Dashboard V1 end */}

                {/* <Route element={ <RequireAuth allowedRoles={ [5150] } /> } > */}
                {/* vai components change the path name Dashboadr to DashboardRole start */}
                <Route element={<PersistLogin />}>
                    <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin, ROLES.User]} />} >
                        <Route path="/DashboardRole" element={<Dashboards />} >
                            <Route path="UserProfile" element={<UserProfile />} />
                            <Route path="UserBookings" element={<UserBookings />} />
                            <Route path="TransactionHistory" element={<TransactionHistory />} />
                        </Route>
                    </Route>
                </Route>
                {/* vai components change the path name Dashboadr to DashboardRole end */}
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </>
    );
};

export default Routers;