import React from 'react';
import { Link } from 'react-router-dom';

const ReviewOption = () => {
    return (
        <div>
            <Link to="/userDashboardHome/review">
                <li>
                    <span>Review</span>
                </li>
            </Link>
        </div>
    );
};

export default ReviewOption;