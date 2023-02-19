import React from 'react';
import styles from './ManageProfile.module.css';
import PersonIcon from '@mui/icons-material/Person';
import LockResetIcon from '@mui/icons-material/LockReset';
import { Link } from 'react-router-dom';

const ManageProfile = () => {
    return (
        <div className={`${styles.dropdown}`}>
            <span className={`${styles.dropbtn}`}>Manage Profile</span>
            <div className={`${styles.dropdownContent}`}>

                <Link to="/dashboardhome/viewProfile">
                    <li>
                        <PersonIcon className={`${styles.icon}`} />
                        <span>View Profile</span>
                    </li>
                </Link>

                <Link to="/dashboardhome/changePassword">
                    <li>
                        <LockResetIcon className={`${styles.icon}`} />
                        <span>Change Password</span>
                    </li>
                </Link>
            </div>
        </div>
    );
};

export default ManageProfile;

/* 
                <Link to="/dashboardhome/addNewCustomer">
                    <li>
                        <PersonAddAltIcon className={`${styles.icon}`} />
                        <span>Add Customer</span>
                    </li>
                </Link>
 */