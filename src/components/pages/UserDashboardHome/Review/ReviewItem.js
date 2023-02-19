import React from 'react';
import DashboardNavbar from '../../DashboardNavbar/DashboardNavbar';
import UserSidebar from '../UserSidebar/UserSidebar';
import ReviewList from './ReviewList';

const ReviewItem = () => {
    return (
        <div className="list">
            <UserSidebar />
            <div className="listContainer">
                <DashboardNavbar />
                <ReviewList />
            </div>
        </div>
    );
};

export default ReviewItem;