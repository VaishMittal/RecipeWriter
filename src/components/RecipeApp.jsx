import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Editor from './Editor'
import './RecipeApp.css';

const RecipeApp = () => {
  const[openForm,setOpenForm] = useState(false);
  function handleOpenForm(){

    setOpenForm(true);
  }

  const[recipeData,setRecipeData]=useState([]);
  function handleRecipeData(data){
    setRecipeData((prev)=>[...prev,{...data,id:Math.random().toString()}])
  }
  console.log(recipeData);

  const [selectedDish,setSelectedDish] = useState("");
  function handleSelectedDish(dishname){
      setSelectedDish(dishname);
  }
  function handleDeleteRecipe(id) {
    setRecipeData((prev) => prev.filter(recipe => recipe.id !== id));
    // if (selectedDish === id) {
    //   setSelectedDish(""); // Close the recipe if it's being deleted
    // }
  }
   
  return (
    <div className='outerbox'>

        <div className='sidebar'>
          <Sidebar
            handleSelectedDish={handleSelectedDish}
            selectedDish={selectedDish}
           onOpenForm={handleOpenForm} 
           recipeData={recipeData}
           />
        </div>

        <div className='editor'>
          <Editor 
          handleDeleteRecipe={handleDeleteRecipe}
          selectedDish={selectedDish}
          setSelectedDish={setSelectedDish}
          openForm={openForm} 
          setOpenForm={setOpenForm}
          handleRecipeData={handleRecipeData}
          recipeData={recipeData}
         />
        </div>

    </div>
  )
}

export default RecipeApp
