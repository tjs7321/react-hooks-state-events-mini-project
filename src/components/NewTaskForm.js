import React, {useState} from "react";

function NewTaskForm({CATEGORIES, onTaskFormSubmit}) {

  const [formDetails, setFormDetails] = useState("")
  const [formCategory, setFormCategory] = useState("")

  const formCategories = CATEGORIES.filter(category => category !== "All")

  function handleDetailChange(event) {
    setFormDetails(event.target.value)
  }

  function handleCategoryChange(event) {
    setFormCategory(event.target.value)
  }

  function handleFormSubmit(event) {
    event.preventDefault()
    onTaskFormSubmit(formDetails, formCategory)
  }


  return (
    <form
    onSubmit={handleFormSubmit}
    className="new-task-form">
      <label>
        Details
        <input
        type="text"
        name="text"
        onChange={handleDetailChange}
        />
      </label>
      <label>
        Category
        <select
        onChange={handleCategoryChange}
        name="category">
          {formCategories.map((category) => 
          <option
          
          key={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
