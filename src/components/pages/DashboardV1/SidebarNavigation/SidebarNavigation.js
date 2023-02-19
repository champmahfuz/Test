import React from 'react';
import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import SpeedIcon from "@mui/icons-material/Speed";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import QuizIcon from "@mui/icons-material/Quiz";
import HikingIcon from '@mui/icons-material/Hiking';
import NoteIcon from '@mui/icons-material/Note';
import useAuth from "../../../../hooks/useAuth";
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import ReviewsIcon from '@mui/icons-material/Reviews';
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";

const SidebarNavigation = () => {
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

                {/*======= Sell Nav Menu Start ======*/}
                {/* <Accordion
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
                            to={`/dashboard/add-new-invoice`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Add New
                                Invoice
                            </Button>
                        </NavLink>
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/userDashboardHomeV1/invoice`}
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
                        <NavLink
                            style={{ textDecoration: "none", marginTop: "0 !important" }}
                            to={`/dashboard/pos`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "uppercase",
                                    fontWeight: "700",
                                    fontSize: "12px",
                                }}
                            >
                                <Filter3Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> POS
                            </Button>
                        </NavLink>
                    </AccordionDetails>
                </Accordion> */}
                {/*======= Sell Nav Menu End ======*/}

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
                            to={`/dashboard/profile`}
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

                {/* My treveller nav menu start */}
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
                            to={`/dashboard/traveller`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "300",
                                    fontSize: "16px",
                                }}
                            >
                                <HikingIcon sx={{ mr: 2, fontSize: "24px" }} />
                                My Traveller
                            </Button>
                        </NavLink>
                    </AccordionSummary>
                </Accordion>
                {/* My treveller nav menu end */}

                {/* My booking nav menu start */}
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
                            to={`/dashboard/MyBooking`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "300",
                                    fontSize: "16px",
                                }}
                            >
                                <NoteIcon sx={{ mr: 2, fontSize: "24px" }} />
                                My Booking
                            </Button>
                        </NavLink>
                    </AccordionSummary>
                </Accordion>
                {/* My booking nav menu end */}

                {/* All booking nav menu start */}
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
                            to={`/dashboard/AllBooking`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "300",
                                    fontSize: "16px",
                                }}
                            >
                                <NoteAltIcon sx={{ mr: 2, fontSize: "24px" }} />
                                All Booking
                            </Button>
                        </NavLink>
                    </AccordionSummary>
                </Accordion>
                {/* All booking nav menu end */}

                {/* Review nav menu start */}
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
                            to={`/dashboard/Review`}
                        >
                            <Button
                                sx={{
                                    color: "#fff !important",
                                    textTransform: "capitalize",
                                    fontWeight: "300",
                                    fontSize: "16px",
                                }}
                            >
                                <ReviewsIcon sx={{ mr: 2, fontSize: "24px" }} />
                                Review
                            </Button>
                        </NavLink>
                    </AccordionSummary>
                </Accordion>
                {/* Review nav menu end */}

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
                            to={`/dashboard/Seetings`}
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

export default SidebarNavigation;