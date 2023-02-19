import React from 'react';
import styles from './ManageCustomerOption.module.css';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Link } from 'react-router-dom';

const ManageCustomerOption = () => {
    return (
        <div className={`${styles.dropdown}`}>
            <span className={`${styles.dropbtn}`}>Customer</span>
            <div className={`${styles.dropdownContent}`}>
                <Link to="/dashboardhome/addNewCustomer">
                    <li>
                        <PersonAddAltIcon className={`${styles.icon}`} />
                        <span>Add Customer</span>
                    </li>
                </Link>
                <Link to="/dashboardhome/manageCustomer">
                    <li>
                        <ManageAccountsIcon className={`${styles.icon}`} />
                        <span>Manage Customer</span>
                    </li>
                </Link>
            </div>
        </div>
    );
};

export default ManageCustomerOption;