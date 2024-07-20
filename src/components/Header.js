import React from 'react';
import './style.css';
import headerImage from './doit.png'; // Adjust the path accordingly

function Header({ handleAddTask, setNewTask, newTask }) {
  return (
    <header className="header">
      <div className="header-left">
      <img src={headerImage} alt="profile" />
        <h1>To Do</h1>
      </div>
      <div className="header-right">
        <input 
          type="text" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
          placeholder="Enter a new task" 
        />
        <button className="add-task" onClick={handleAddTask}>Add A Task</button>
      </div>
    </header>
  );
}

export default Header;
