import React from 'react';
import styles from './ManageSellOption.module.css';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { Link } from 'react-router-dom';

const ManageSellOption = () => {
    return (
        <div className={`${styles.dropdown}`}>
            <span className={`${styles.dropbtn}`}>Sell</span>
            <div className={`${styles.dropdownContent}`}>
                <Link to="/dashboardhome/addNewInvoice">
                    <li>
                        <CurrencyExchangeIcon className={`${styles.icon}`} />
                        <span>Sell</span>
                    </li>
                </Link>
                <Link to="/dashboardhome/manageInvoice">
                    <li>
                        <ReceiptIcon className={`${styles.icon}`} />
                        <span>Manage Invoice</span>
                    </li>
                </Link>

            </div>
        </div>
    );
};

export default ManageSellOption;