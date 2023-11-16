import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onTaskDelete }) => {
  const handleTaskDelete = (id) => {
    onTaskDelete(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onTaskDelete={handleTaskDelete} />
      ))}
    </div>
  );
};

export default TaskList;