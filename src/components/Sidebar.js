import React from 'react';
import profileImage from './manish.png';
import './style.css';

function Sidebar({ taskCount }) { // Accept taskCount as a prop
  const [profile, setProfile] = React.useState(profileImage);

  const handleChangeProfile = () => {
    const newProfile = prompt('Enter new profile image URL:');
    if (newProfile) {
      setProfile(newProfile);
    }
  };

  return (
    <aside className="sidebar">
      <div className="profile" onClick={handleChangeProfile}>
        <img src={profile} alt="User Profile" />
        <h2>My Profile</h2>
      </div>
      <nav className="menu">
        <ul>
          <li><a href="#menu">Logout</a></li>
          <li><a href="#home">Important</a></li>
          <li><a href="#tasks">Planned</a></li>
          <li><a href="#setting">Assigned to me</a></li>
        </ul>
      </nav>
      <button className="add-list">+ Add list</button>
      <div className="today-tasks">
        <p>Today Tasks</p>
        <div className="task-count">{taskCount}</div>
      </div>
    </aside>
  );
}

export default Sidebar;
