import React from 'react';
import styles from './ManageProductOption.module.css';
import CategoryIcon from '@mui/icons-material/Category';
import ShopIcon from '@mui/icons-material/Shop';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Link } from 'react-router-dom';

const ManageProductOption = () => {
    return (
        <div className={`${styles.dropdown}`}>
            <span className={`${styles.dropbtn}`}>Product</span>
            <div className={`${styles.dropdownContent}`}>
                <Link to="/dashboardhome/addNewCategory">
                    <li>
                        <CategoryIcon className={`${styles.icon}`} />
                        <span>Category</span>
                    </li>
                </Link>
                <Link to="/dashboardhome/purchaseProduct">
                    <li>
                        <ShopIcon className={`${styles.icon}`} />
                        <span>Purchase</span>
                    </li>
                </Link>
                <li>
                    <Link to="/dashboardhome/addNewProduct">
                        <AddBusinessIcon className={`${styles.icon}`} />
                        <span>Add Product</span>
                    </Link>
                </li>
                <Link to="/dashboardhome/manageProduct">
                    <li>
                        <ManageAccountsIcon className={`${styles.icon}`} />
                        <span>Manage Product</span>
                    </li>
                </Link>
            </div>
        </div>
    );
};

export default ManageProductOption;