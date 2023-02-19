import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../../assets/img/logo.png';
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import SidebarNavigation from '../../DashboardV1/SidebarNavigation/SidebarNavigation';
import DashboardNavbarV1 from '../../DashboardV1/DashboardNavbarV1/DashboardNavbarV1';
import Routers from '../../../Routers/Routers';
import AdminSidebarNavigation from '../AdminSidebarNavigation/AdminSidebarNavigation';

const drawerWidth = 270;

const AdminDashboardHome = (props) => {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    //   Loading Spinner
    //   if (loading) {
    //     return (
    //       <div className="d-flex justify-content-center align-items-center mt-5">
    //         <div className="spinner-border text-primary"></div>
    //       </div>
    //     );
    //   }

    const drawer = (
        <div style={{ background: "#e3f2fd" }}>
            <NavLink
                to="/"
                style={{ cursor: "pointer", textDecoration: "none" }}
            >
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, my: 2, textAlign: "center" }}
                >
                    <img
                        style={{
                            width: "50%",
                            height: "40px",
                        }}
                        src={logo}
                        alt=""
                    />
                </Typography>
            </NavLink>
            {/* <Toolbar /> */}
            <AdminSidebarNavigation />
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <AppBar
                elevation={0}
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    background: "#ffffff !important",
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" }, color: "#000 !important" }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box sx={{ width: "100%" }}>
                        <DashboardNavbarV1 />
                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                            // overflowY: "unset",
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    background: "#E5E5E5",
                    height: "100%",
                }}
            >
                <Toolbar />
                {/* Nested Routes */}
                <Routers />
            </Box>
        </Box>
    );
};

AdminDashboardHome.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default AdminDashboardHome;