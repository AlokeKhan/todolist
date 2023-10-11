import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div style = {{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
      <span
        onClick={() => onToggle(task.id)}
      >
        {task.text}
      </span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;