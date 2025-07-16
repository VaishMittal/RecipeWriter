import React, { useState } from 'react'
import CreateRecipe from './CreateRecipe'
import YourRecipe from './YourRecipe'
import './Sidebar.css'

const Sidebar = ({onOpenForm, recipeData ,handleSelectedDish,selectedDish}) => {
  const[show,setShow]=useState(true);

  return (
    <div>
      <CreateRecipe onOpenForm={onOpenForm}/>
      <button className='recipeshowbut' onClick={()=>setShow((prev)=>!prev)}>Your Recipes {show ? " ▼ " : "▲ " } </button>
      
      { show && <YourRecipe recipeData={recipeData} handleSelectedDish={handleSelectedDish} selectedDish={selectedDish} />}
    </div>
  )
}

export default Sidebar
