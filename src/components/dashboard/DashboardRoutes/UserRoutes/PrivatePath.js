import React from 'react'; import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

const PrivatePath = () => {
    return (
        <div>
            <Link className='link-td-none' to='/' >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon >
                        <HomeIcon
                            sx={ {
                                '& > :not(style)': { color: "#1976D2" }
                            } }
                        />
                    </ListItemIcon>
                    <ListItemText
                        primaryTypographyProps={ { color: "#1976D2" } }
                        primary="Home"
                    />
                </ListItem>
            </Link>
            <Link className='link-td-none' to='' >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <AccountBoxIcon
                            sx={ {
                                '& > :not(style)': { color: "#1976D2" }
                            } }
                        />
                    </ListItemIcon>
                    <ListItemText
                        primaryTypographyProps={ { color: "#1976D2" } }
                        primary="User Profile"
                    />
                </ListItem>
            </Link>
            <Link className='link-td-none' to='UserBookings' primary="Test Primary" >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <ShoppingBasketIcon
                            sx={ {
                                '& > :not(style)': { color: "#1976D2" }
                            } }
                        />
                    </ListItemIcon>
                    <ListItemText
                        primaryTypographyProps={ { color: "#1976D2" } }
                        primary="User Bookings"
                    />
                </ListItem>
            </Link>
            <Link className='link-td-none' to="TransactionHistory" primary="Test Primary" >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <LocalLibraryIcon
                            sx={ {
                                '& > :not(style)': { color: "#1976D2" }
                            } }
                        />
                    </ListItemIcon>
                    <ListItemText
                        primaryTypographyProps={ { color: "#1976D2" } }
                        primary="Transaction History"
                    />
                </ListItem>
            </Link>

        </div>
    );
};

export default PrivatePath;