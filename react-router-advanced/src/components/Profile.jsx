// Profile.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <ul>
          <li><a href="/profile/details">Profile Details</a></li>
          <li><a href="/profile/settings">Profile Settings</a></li>
        </ul>
      </nav>
      {/* Nested route renders here */}
      <Outlet />
    </div>
  );
}

export default Profile;
