import React, {useState} from "react";
import Task from "./Task";

function TaskList({taskList, handleDeleteTask, selected}) {

  const newTaskList = taskList.filter((task) => {
      if (selected === "All") return true
      return task.category === selected
      })

  return (
    <div className="tasks">
      {newTaskList.map((task) => (
        <Task
        key={task.text}
        text={task.text}
        category={task.category}
        handleDeleteTask={handleDeleteTask}/>
      ))}
    </div>
  );
}

export default TaskList;
