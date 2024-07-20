import React, { useState } from 'react';
import Header from '../src/components/Header';
import Sidebar from '../src/components/Sidebar';
import Tasks from '../src/components/Tasks';
import TaskDetails from '../src/components/TaskDetails';
import './components/style.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Buy groceries', completed: false, important: false, favorite: false },
    { id: 2, text: 'Finish project report', completed: false, important: true, favorite: false },
    { id: 3, text: 'Call the bank', completed: false, important: false, favorite: false },
    { id: 4, text: 'Schedule dentist appointment', completed: false, important: false, favorite: false },
    { id: 5, text: 'Plan weekend trip', completed: false, important: false, favorite: false },
    { id: 6, text: 'Read a book', completed: true, important: false, favorite: false },
    { id: 7, text: 'Clean the house', completed: true, important: false, favorite: false }
  ]);

  const [newTask, setNewTask] = useState('');
  const [selectedTask, setSelectedTask] = useState(null);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, text: newTask, completed: false, important: false, favorite: false }
      ]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    if (selectedTask && selectedTask.id === taskId) {
      setSelectedTask(null);
    }
  };

  const handleEditTask = (taskId, newText) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, text: newText } : task));
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  const handleToggleFavorite = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, favorite: !task.favorite } : task
    ));
  };

  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const getTodayTaskCount = () => {
    // For this example, let's just count non-completed tasks
    return tasks.filter(task => !task.completed).length;
  };

  return (
    <div className="app">
      <Sidebar taskCount={getTodayTaskCount()} /> {/* Pass the task count */}
      <div className="main-content">
        <Header handleAddTask={handleAddTask} setNewTask={setNewTask} newTask={newTask} />
        <div className="content">
          <Tasks 
            tasks={tasks} 
            handleTaskClick={handleTaskClick} 
            handleDeleteTask={handleDeleteTask} 
            handleEditTask={handleEditTask} 
            handleToggleFavorite={handleToggleFavorite}
            handleToggleComplete={handleToggleComplete}
          />
          {selectedTask && (
            <TaskDetails
              task={selectedTask}
              handleEditTask={handleEditTask}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
