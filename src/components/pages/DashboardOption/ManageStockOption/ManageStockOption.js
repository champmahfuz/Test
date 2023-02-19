import React from 'react';
import styles from './ManageStockOption.module.css';
import SummarizeIcon from '@mui/icons-material/Summarize';

const ManageStockOption = () => {
    return (
        <div className={`${styles.dropdown}`}>
            <span className={`${styles.dropbtn}`}>Stock</span>
            <div className={`${styles.dropdownContent}`}>
                <li>
                    <SummarizeIcon className={`${styles.icon}`} />
                    <span>Stock Report</span>
                </li>

            </div>
        </div>
    );
};

export default ManageStockOption;