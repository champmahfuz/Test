import React from 'react';
import styles from './ManageLoanOption.module.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';

const ManageLoanOption = () => {
    return (
        <div className={`${styles.dropdown}`}>
            <span className={`${styles.dropbtn}`}>Tour Loan</span>
            <div className={`${styles.dropdownContent}`}>
                <li>
                    <AddCircleIcon className={`${styles.icon}`} />
                    <span>Add Loan</span>
                </li>
                <li>
                    <CreditCardIcon className={`${styles.icon}`} />
                    <span>Manage Loan</span>
                </li>
                <li>
                    <RequestQuoteIcon className={`${styles.icon}`} />
                    <span>Add Payment</span>
                </li>

            </div>
        </div>
    );
};

export default ManageLoanOption;