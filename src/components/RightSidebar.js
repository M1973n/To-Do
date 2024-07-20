// RightSidebar.js
import React from 'react';
import './style.css';

const RightSidebar = ({ selectedTask }) => {
  if (!selectedTask) {
    return (
      <aside className="right-sidebar">
        <p>Select a task to see details</p>
      </aside>
    );
  }

  return (
    <aside className="right-sidebar">
      <ul>
        <li>
          <input type="checkbox" checked={selectedTask.completed} readOnly />
          <span>{selectedTask.text}</span>
        </li>
        <li><a href="#add-step">➕ Add Step</a></li>
        <li><a href="#set-reminder">Set Reminder</a></li>
        <li><a href="#add-due-date">Add Due Date</a></li>
        <li><a href="#repeat">Repeat</a></li>
      </ul>
      <textarea className = "right-sidebar textarea" placeholder="Add Notes"></textarea>
    </aside>
  );
};

export default RightSidebar;
