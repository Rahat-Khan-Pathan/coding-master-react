import React from 'react';
import UseFakeUsers from '../../hooks/FakeUsers';
import User from '../User/User';

const Users = () => {
    const users = UseFakeUsers();   // Getting fake user data for about component
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4 px-2">
            {
                users.map(user => <User key={user._id} data={user}></User>)
            }
        </div>
    );
};

export default Users;