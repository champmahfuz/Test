import React from 'react';
import styles from './ManageExpenseOption.module.css';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { Link } from 'react-router-dom';

const ManageExpenseOption = () => {
    return (
        <div className={`${styles.dropdown}`}>
            <span className={`${styles.dropbtn}`}>Expense</span>
            <div className={`${styles.dropdownContent}`}>
                <Link to="/dashboardhome/expenseItem">
                    <li>
                        <FileCopyIcon className={`${styles.icon}`} />
                        <span>Manage Expense</span>
                    </li>
                </Link>
                <Link to="/dashboardhome/addExpense">
                    <li>
                        <PostAddIcon className={`${styles.icon}`} />
                        <span>Add Expense</span>
                    </li>
                </Link>

            </div>
        </div>
    );
};

export default ManageExpenseOption;