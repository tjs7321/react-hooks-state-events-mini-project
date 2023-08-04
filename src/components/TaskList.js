import React, {useState} from "react";
import Task from "./Task";

function TaskList({TASKS}) {
  const [taskList, setTaskList] = useState([...TASKS])

  function deleteTask(text) {
    setTaskList(taskList.filter(task => task.text !== text))
  }

  return (
    <div className="tasks">
      {taskList.map((task) => (
        <Task key={task.text} text={task.text} category={task.category} deleteTask={deleteTask}/>
      ))}
    </div>
  );
}

export default TaskList;
