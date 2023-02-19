import { Accordion, AccordionSummary, Box, Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import SpeedIcon from "@mui/icons-material/Speed";
import AccordionDetails from "@mui/material/AccordionDetails";
import Filter1Icon from "@mui/icons-material/Filter1";
import Filter2Icon from "@mui/icons-material/Filter2";
import Filter3Icon from "@mui/icons-material/Filter3";
import Filter4Icon from "@mui/icons-material/Filter";
import PersonIcon from "@mui/icons-material/Person";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import LogoutIcon from "@mui/icons-material/Logout";
import Inventory2Icon from '@mui/icons-material/Inventory2';
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import FaceIcon from '@mui/icons-material/Face';
import ReportIcon from '@mui/icons-material/Report';
import PaidIcon from '@mui/icons-material/Paid';


const AdminSidebarNavigation = () => {
    const { logOut } = useAuth();
    // const [admin, setAdmin] = React.useState(true);
    return (
        <Box
            sx={{
                background: "#003366 !important",
                color: "#fff !important",
            }}
        >

            <>
                {/*======= Dashboard Nav Menu Start ======*/}
                <Accordion
                    TransitionProps={{ unmountOnExit: true }}
                    sx={{
                        background: "#003366 !important",
                        boxShadow: "none !important",
                    }}
                >
                    <AccordionSummary>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/home`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "300",
                                    fontSize: "14px",
                                }}
                            >
                                <SpeedIcon sx={{ mr: 2, fontSize: "24px" }} />
                                Dashboard
                            </Button>
                        </NavLink>
                    </AccordionSummary>
                </Accordion>
                {/*======= Dashboard Nav Menu End ======*/}

                {/* User nav menu starts */}
                <Accordion
                    TransitionProps={{ unmountOnExit: true }}
                    sx={{
                        background: "#003366 !important",
                        boxShadow: "none !important",
                        marginTop: "0 !important",
                    }}
                >
                    <AccordionSummary>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/AdminDashboardHomeV1/AdminUser`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "300",
                                    fontSize: "16px",
                                }}
                            >
                                <PersonIcon sx={{ mr: 2, fontSize: "24px" }} />
                                User
                            </Button>
                        </NavLink>
                    </AccordionSummary>
                </Accordion>
                {/* User nav menu starts */}

                {/*======= Sell Nav Menu Start ======*/}
                <Accordion
                    TransitionProps={{ unmountOnExit: true }}
                    sx={{
                        background: "#003366 !important",
                        boxShadow: "none !important",
                    }}
                >
                    <AccordionSummary
                        expandIcon={
                            <ArrowBackIosNewIcon
                                sx={{ color: "#fff !important", fontSize: "12px" }}
                            />
                        }
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        sx={{
                            "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                                transform: "rotate(-90deg)",
                                marginBottom: 0,
                            },
                        }}
                    >
                        <Button
                            sx={{
                                color: "#fff !important",
                                textTransform: "capitalize",
                                fontWeight: "300",
                                fontSize: "16px",
                            }}
                        >
                            <PointOfSaleIcon sx={{ mr: 2, fontSize: "24px" }} />
                            Sell
                        </Button>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: "#012C56 !important" }}>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/AdminDashboardHomeV1/AddNewInvoice`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage Sell
                            </Button>
                        </NavLink>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/AdminDashboardHomeV1/ManageInvoice`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage
                                Invoice
                            </Button>
                        </NavLink>
                    </AccordionDetails>
                </Accordion>
                {/*======= Sell Nav Menu End ======*/}

                {/* Package nav menu starts */}
                <Accordion
                    TransitionProps={{ unmountOnExit: true }}
                    sx={{
                        background: "#003366 !important",
                        boxShadow: "none !important",
                    }}
                >
                    <AccordionSummary
                        expandIcon={
                            <ArrowBackIosNewIcon
                                sx={{ color: "#fff !important", fontSize: "12px" }}
                            />
                        }
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        sx={{
                            "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                                transform: "rotate(-90deg)",
                                marginBottom: 0,
                            },
                        }}
                    >
                        <Button
                            sx={{
                                color: "#fff !important",
                                textTransform: "capitalize",
                                fontWeight: "300",
                                fontSize: "16px",
                            }}
                        >
                            <Inventory2Icon sx={{ mr: 2, fontSize: "24px" }} />
                            Package
                        </Button>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: "#012C56 !important" }}>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/AdminDashboardHomeV1/AddNewPackage`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Category
                            </Button>
                        </NavLink>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/AdminDashboardHomeV1/PurchasePackage`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Purchase
                            </Button>
                        </NavLink>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/AdminDashboardHomeV1/AddNewPackageProduct`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter3Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Add Package
                            </Button>
                        </NavLink>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/AdminDashboardHomeV1/ManagePackage`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter4Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage Package
                            </Button>
                        </NavLink>
                    </AccordionDetails>
                </Accordion>
                {/* Package nav menu ends */}

                {/* Customer nav menu starts */}
                <Accordion
                    TransitionProps={{ unmountOnExit: true }}
                    sx={{
                        background: "#003366 !important",
                        boxShadow: "none !important",
                    }}
                >
                    <AccordionSummary
                        expandIcon={
                            <ArrowBackIosNewIcon
                                sx={{ color: "#fff !important", fontSize: "12px" }}
                            />
                        }
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        sx={{
                            "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                                transform: "rotate(-90deg)",
                                marginBottom: 0,
                            },
                        }}
                    >
                        <Button
                            sx={{
                                color: "#fff !important",
                                textTransform: "capitalize",
                                fontWeight: "300",
                                fontSize: "16px",
                            }}
                        >
                            <FaceIcon sx={{ mr: 2, fontSize: "24px" }} />
                            Customer
                        </Button>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: "#012C56 !important" }}>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/AdminDashboardHomeV1/AddNewCustomer`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Add Customer
                            </Button>
                        </NavLink>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/AdminDashboardHomeV1/ManageCustomer`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage Customer
                            </Button>
                        </NavLink>


                    </AccordionDetails>
                </Accordion>
                {/* Customer nav menu end */}



                {/* My Account nav menu start */}
                <Accordion
                    TransitionProps={{ unmountOnExit: true }}
                    sx={{
                        background: "#003366 !important",
                        boxShadow: "none !important",
                    }}
                >
                    <AccordionSummary
                        expandIcon={
                            <ArrowBackIosNewIcon
                                sx={{ color: "#fff !important", fontSize: "12px" }}
                            />
                        }
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        sx={{
                            "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                                transform: "rotate(-90deg)",
                                marginBottom: 0,
                            },
                        }}
                    >
                        <Button
                            sx={{
                                color: "#fff !important",
                                textTransform: "capitalize",
                                fontWeight: "300",
                                fontSize: "16px",
                            }}
                        >
                            <CurrencyExchangeIcon sx={{ mr: 2, fontSize: "24px" }} />
                            Accounts
                        </Button>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: "#012C56 !important" }}>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/AdminDashboardHomeV1/ManagePayment`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Payment
                            </Button>
                        </NavLink>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/AdminDashboardHomeV1/ManageTransaction`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage Transaction
                            </Button>
                        </NavLink>


                    </AccordionDetails>
                </Accordion>
                {/* My Account nav menu end */}

                {/* My Report nav starts */}
                <Accordion
                    TransitionProps={{ unmountOnExit: true }}
                    sx={{
                        background: "#003366 !important",
                        boxShadow: "none !important",
                    }}
                >
                    <AccordionSummary
                        expandIcon={
                            <ArrowBackIosNewIcon
                                sx={{ color: "#fff !important", fontSize: "12px" }}
                            />
                        }
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        sx={{
                            "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                                transform: "rotate(-90deg)",
                                marginBottom: 0,
                            },
                        }}
                    >
                        <Button
                            sx={{
                                color: "#fff !important",
                                textTransform: "capitalize",
                                fontWeight: "300",
                                fontSize: "16px",
                            }}
                        >
                            <ReportIcon sx={{ mr: 2, fontSize: "24px" }} />
                            Report
                        </Button>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: "#012C56 !important" }}>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/AdminDashboardHomeV1/PurchaseReport`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Purchase Report
                            </Button>
                        </NavLink>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/AdminDashboardHomeV1/SalesReport`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Sales Report
                            </Button>
                        </NavLink>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/AdminDashboardHomeV1/ProfitReport`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter3Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Profit Report
                            </Button>
                        </NavLink>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/AdminDashboardHomeV1/TodaysReport`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter4Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Todays Report
                            </Button>
                        </NavLink>
                    </AccordionDetails>
                </Accordion>
                {/* My Report nav ends */}

                {/* My Expenxe nav menu starts */}
                <Accordion
                    TransitionProps={{ unmountOnExit: true }}
                    sx={{
                        background: "#003366 !important",
                        boxShadow: "none !important",
                    }}
                >
                    <AccordionSummary
                        expandIcon={
                            <ArrowBackIosNewIcon
                                sx={{ color: "#fff !important", fontSize: "12px" }}
                            />
                        }
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        sx={{
                            "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                                transform: "rotate(-90deg)",
                                marginBottom: 0,
                            },
                        }}
                    >
                        <Button
                            sx={{
                                color: "#fff !important",
                                textTransform: "capitalize",
                                fontWeight: "300",
                                fontSize: "16px",
                            }}
                        >
                            <PaidIcon sx={{ mr: 2, fontSize: "24px" }} />
                            Expense
                        </Button>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: "#012C56 !important" }}>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/AdminDashboardHomeV1/ManageExpense`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage Expense
                            </Button>
                        </NavLink>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/AdminDashboardHomeV1/AddExpense`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Add Expense
                            </Button>
                        </NavLink>


                    </AccordionDetails>
                </Accordion>
                {/* My Expenxe nav menu ends */}

                {/* Seetings nav menu starts here  */}
                <Accordion
                    TransitionProps={{ unmountOnExit: true }}
                    sx={{
                        background: "#003366 !important",
                        boxShadow: "none !important",
                        marginTop: "0 !important",
                    }}
                >
                    <AccordionSummary>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/AdminDashboardHomeV1/Seetings`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "300",
                                    fontSize: "16px",
                                }}
                            >
                                <SettingsApplicationsIcon sx={{ mr: 2, fontSize: "24px" }} />
                                Seetings
                            </Button>
                        </NavLink>
                    </AccordionSummary>
                </Accordion>
                {/* Seetings nav menu ends here  */}

                {/* My Profile nav menu start */}
                <Accordion
                    TransitionProps={{ unmountOnExit: true }}
                    sx={{
                        background: "#003366 !important",
                        boxShadow: "none !important",
                        marginTop: "0 !important",
                    }}
                >
                    <AccordionSummary>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/AdminDashboardHomeV1/MyProfile`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "300",
                                    fontSize: "16px",
                                }}
                            >
                                <PersonIcon sx={{ mr: 2, fontSize: "24px" }} />
                                My Profile
                            </Button>
                        </NavLink>
                    </AccordionSummary>
                </Accordion>
                {/* My Profile nav menu end */}


                {/*======= Logout Nav Menu Start ======*/}
                <Accordion
                    TransitionProps={{ unmountOnExit: true }}
                    sx={{
                        background: "#003366 !important",
                        boxShadow: "none !important",
                        marginTop: "0 !important",
                    }}
                >
                    <AccordionSummary>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to="/"
                        >
                            <Button
                                onClick={logOut}
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "300",
                                    fontSize: "16px",
                                }}
                            >
                                <LogoutIcon sx={{ mr: 2, fontSize: "24px" }} />
                                LogOut
                            </Button>
                        </NavLink>
                    </AccordionSummary>
                </Accordion>
                {/*======= Test Component Nav Menu End ======*/}
            </>

        </Box>
    );
};

export default AdminSidebarNavigation;