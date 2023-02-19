import React from 'react';
import styles from './ManageReportOption.module.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import { Link } from 'react-router-dom';

const ManageReportOption = () => {
    return (
        <div className={`${styles.dropdown}`}>
            <span className={`${styles.dropbtn}`}>Report</span>
            <div className={`${styles.dropdownContent}`}>
                <Link to="/dashboardhome/purchaseReport">
                    <li>
                        <ShoppingBasketIcon className={`${styles.icon}`} />
                        <span>Purchase Report</span>
                    </li>
                </Link>
                <Link to="/dashboardhome/salesReport">
                    <li>
                        <PointOfSaleIcon className={`${styles.icon}`} />
                        <span>Sales Report</span>
                    </li>
                </Link>
                <Link to="/dashboardhome/profitReport">
                    <li>
                        <AttachMoneyIcon className={`${styles.icon}`} />
                        <span>Profit Report</span>
                    </li>
                </Link>
                <Link to="/dashboardhome/todaysReport">
                    <li>
                        <AutoAwesomeMotionIcon className={`${styles.icon}`} />
                        <span>Todays Report</span>
                    </li>
                </Link>

            </div>
        </div>
    );
};

export default ManageReportOption;