import React from 'react';
import { FaStar } from 'react-icons/fa';
import './style.css';

const Tasks = ({ tasks, handleTaskClick, handleDeleteTask, handleEditTask, handleToggleFavorite, handleToggleComplete }) => {
  return (
    <section className="tasks">
      <ul>
        {tasks.map(task => (
          <li key={task.id} onClick={() => handleTaskClick(task)}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={(e) => {
                e.stopPropagation();
                handleToggleComplete(task.id);
              }}
            />
            <span className={task.completed ? 'completed' : ''}>{task.text}</span>
            <FaStar
              className={`star-icon ${task.favorite ? 'favorite' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                handleToggleFavorite(task.id);
              }}
            />
            <button
              className="edit-task"
              onClick={(e) => {
                e.stopPropagation();
                const newText = prompt('Edit task:', task.text);
                if (newText) {
                  handleEditTask(task.id, newText);
                }
              }}
            >
              Edit
            </button>
            <button
              className="delete-task"
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteTask(task.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tasks;
