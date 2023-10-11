import React, { useState } from 'react';
import List from './List';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Yo this is a to-do app', completed: false },
  ]);

  const addTask = text => 
  {
    const newTask = 
    {
      id: tasks.length + 1,
      text: text,
      completed: false,
    };
    setTasks ([...tasks, newTask]);
  };

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = id => 
  {
    setTasks(
      tasks.map(task =>
        task.id === id ? {...task, completed: !task.completed} : task
        )
      );
  };

  return (
    <div className="App">
      <h2>The List of Doing</h2>
      <input
        type ="text"
        placeholder = "Press Enter to add"
        onKeyPress={e => {
          if (e.key === 'Enter') {
            addTask(e.target.value);
            e.target.value = '';
          }
        }}
      />
      <List tasks={tasks} onDelete={deleteTask} onToggle = {toggleTask} />
    </div>
  );
};

export default App;