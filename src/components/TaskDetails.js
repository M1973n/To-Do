import React, { useState } from 'react';
import './style.css';

function TaskDetails({ task, handleEditTask }) {
  const [note, setNote] = useState('');

  return (
    <aside className="task-details">
      <ul>
        <li>{task.text}</li>
        <li><a href="#step">+ Add Step</a></li>
        <li><a href="#reminder">Set Reminder</a></li>
        <li><a href="#date">Add Due Date</a></li>
        <li><a href="#repeat">Repeat</a></li>
      </ul>
      <textarea 
        placeholder="Add Notes" 
        value={note} 
        onChange={(e) => setNote(e.target.value)} 
      />
    </aside>
  );
}

export default TaskDetails;
