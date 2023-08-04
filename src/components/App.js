import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";


function App() {
  const [taskList, setTaskList] = useState(TASKS)
  const [selected, setSelected] = useState("All")

  function handleDeleteTask(text) {
    setTaskList(taskList.filter(task => task.text !== text))
  }

  function onTaskFormSubmit(formDetails, formCategory) {
    setTaskList([...taskList, {
      text: formDetails,
      category: formCategory,
    }])
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
      CATEGORIES={CATEGORIES}
      selected={selected}
      setSelected={setSelected}
      />
      <NewTaskForm 
      CATEGORIES={CATEGORIES}
      onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList
      taskList={taskList}
      handleDeleteTask={handleDeleteTask}
      selected={selected}
      />
    </div>
  );
}

export default App;
