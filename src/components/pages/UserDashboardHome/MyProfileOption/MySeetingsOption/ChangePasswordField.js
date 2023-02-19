import React from 'react';
import UserSidebar from '../../UserSidebar/UserSidebar';
import ChangePasswordList from './ChangePasswordList';

const ChangePasswordField = () => {
    return (
        <div className="list">
            <UserSidebar />
            <div className="listContainer">
                <ChangePasswordList />
            </div>
        </div>
    );
};

export default ChangePasswordField;