import {
    AppBar,
    Avatar,
    Box,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { Link } from "react-router-dom";
import logov2 from "../../../../images/logov2.png"
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../userfirebase.init";
import styles from './Navbarv2.module.css';
import AdbIcon from "@mui/icons-material/Adb";

const Navbarv2 = () => {
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth)
    };
    // const navigate = useNavigate();
    // const { auth } = useAuth({});
    // const logout = useLogout();
    // const signOut = async () => {
    //     await logout();
    //     navigate('/')

    // }

    const pages = [
        "Home",
        "Services",
        "About",
        "Contact",
        "Blogs",
    ];
    const settings = [""];
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <AppBar
                position="sticky"
                sx={{
                    background: "linear-gradient(90deg, #26272B, #26272b)",
                    py: "5px"
                }}
            >
                <Container>
                    <Toolbar disableGutters sx={{ p: 0, m: 0 }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                        >
                            <Link to="/">
                                <img src={logov2} width="180px" alt="logo" />
                            </Link>
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography component="div" variant="h6" sx={{ fontWeight: 600 }}>{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                        >
                            <img src={logov2} width="120px" alt="logo" />
                        </Typography>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", md: "flex" },
                                justifyContent: { md: "flex-end" },
                            }}
                        >
                            {pages.map((page) => (
                                <Typography
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ ml: 2, color: "white", display: "block" }}
                                >
                                    <Link
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                            fontWeight: 400,

                                            // background: '-webkit-linear-gradient(90deg, crimson, #673AB7)',
                                            // WebkitBackgroundClip: 'text',
                                            // WebkitTextFillColor: 'transparent'
                                        }}
                                        to={`/${page}`}
                                    >
                                        {page}
                                    </Link>
                                </Typography>
                            ))}

                        </Box>
                        <Typography
                            sx={{ ml: 2, color: "white", display: "block" }}
                        >{user?.displayName}</Typography>
                        <Box
                            sx={{
                                flexGrow: 0,
                            }}
                        >
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu}>
                                    {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                                    <Avatar alt="Remy Sharp" src={user?.photoURL} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        {/* <Typography textAlign="center">{ setting }</Typography> */}
                                        <Link
                                            style={{
                                                textDecoration: "none",
                                                color: "black",
                                                fontWeight: 600,
                                            }}
                                            to={`/${setting}`}
                                        >
                                            {setting}
                                        </Link>
                                    </MenuItem>
                                ))}

                                <MenuItem>
                                    {
                                        user &&
                                        <Link
                                            style={{
                                                textDecoration: "none",
                                                color: "black",
                                                fontWeight: 600,
                                            }}
                                            to="/dashboard/profile"
                                        >
                                            Profile
                                        </Link>
                                    }
                                </MenuItem>

                                <MenuItem>
                                    {
                                        user &&
                                        <Link
                                            style={{
                                                textDecoration: "none",
                                                color: "black",
                                                fontWeight: 600,
                                            }}
                                            to="/dashboard/profile"
                                        >
                                            Dashboard
                                        </Link>
                                    }
                                </MenuItem>

                                <MenuItem>
                                    {user ? (
                                        <Typography
                                            sx={{
                                                textDecoration: "none",
                                                color: "black",
                                                fontWeight: 600,
                                            }}
                                            onClick={logout}>
                                            SignOut
                                        </Typography>
                                    ) : (
                                        <Link
                                            style={{
                                                textDecoration: "none",
                                                color: "black",
                                                fontWeight: 600,
                                            }}
                                            to="/account/signin"
                                        >
                                            SignIn
                                        </Link>
                                    )}

                                </MenuItem>


                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default Navbarv2;