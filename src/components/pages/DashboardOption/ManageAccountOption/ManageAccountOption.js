import React from 'react';
import styles from './ManageAccountOption.module.css';
import PaidIcon from '@mui/icons-material/Paid';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Link } from 'react-router-dom';

const ManageAccountOption = () => {
    return (
        <div className={`${styles.dropdown}`}>
            <span className={`${styles.dropbtn}`}>Accounts</span>
            <div className={`${styles.dropdownContent}`}>
                <Link to="/dashboardhome/managePayment">
                    <li>
                        <PaidIcon className={`${styles.icon}`} />
                        <span>Payment</span>
                    </li>
                </Link>

                <Link to="/dashboardhome/manageTransaction">
                    <li>
                        <AccountBalanceIcon className={`${styles.icon}`} />
                        <span>Manage Transaction</span>
                    </li>
                </Link>

            </div>
        </div>
    );
};

export default ManageAccountOption;