import React, {useState} from "react"

function CategoryFilter({CATEGORIES, selected, setSelected}) {  

  function handleClick(category) {
    setSelected(category)
    console.log(category)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map((category) => 
      <button
      onClick={() => handleClick(category)}
      className={category === selected ? "selected" : ""}
      key={category}>{category}
      </button>)}
    </div>
  );
}

export default CategoryFilter
