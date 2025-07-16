// import React, { useState } from 'react'
import RecipeForm from './RecipeForm'
import RecipeTemplate from './RecipeTemplate';

const Editor = ({openForm,setOpenForm,handleRecipeData,recipeData, selectedDish,setSelectedDish,handleDeleteRecipe}) => {
  return (
    <div> 
      {openForm && <RecipeForm setOpenForm={setOpenForm}  handleRecipeData={handleRecipeData}/>} 
      {!openForm && selectedDish == "" && (
        <h2
          style={{
            border: "2px solid lightgreen",
            width: "50%",
            padding: "20px",
            marginTop:"10rem",
            marginLeft: "18rem",
            borderRadius:"20px",
            backgroundColor: "lightpink",
          }}
        >
          Write New Recipe OR Check Your Recipies...
        </h2>
      )}
      { !openForm && <RecipeTemplate recipeData={recipeData} selectedDish={selectedDish}  setSelectedDish={setSelectedDish} handleDeleteRecipe={handleDeleteRecipe}  />}
      
    </div>
  )
}

export default Editor
