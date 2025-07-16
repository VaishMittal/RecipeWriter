import React from "react";
import "./RecipeTemplate.css";

const RecipeTemplate = ({
  recipeData,
  selectedDish,
  setSelectedDish,
  handleDeleteRecipe,
}) => {
  return (
    <div>
      {recipeData
        .filter((data) => data.id.toString() === selectedDish.toString())
        .map((recipe) => (
          <Template
            key={recipe.id}
            recipe={recipe}
            setSelectedDish={setSelectedDish}
            handleDeleteRecipe={handleDeleteRecipe}
          />
        ))}
    </div>
  );
};

export default RecipeTemplate;



const Template = ({ recipe, setSelectedDish, handleDeleteRecipe }) => {
  return (
    <div className="card"> 
      
      <div className="col1">
        <h1>{recipe?.dish}</h1>
        <h2 className="writer">
          {" "}
          By: <i>{recipe?.writtenBy}</i>
        </h2>
        <h2>INGREDIENTS:</h2>
        <ul>
          {recipe?.ingredients?.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
       
      </div>
      <div className="col2">
        <img src={recipe?.image} alt={recipe?.dish} />
      </div>
      <div>
        <div className="btngrp">
        <button
          className="deletebtn"
          onClick={() => handleDeleteRecipe(recipe.id)}
        > 🗑 
        </button>
        <button className="closebtn" onClick={() => setSelectedDish("")}>
          ✖
        </button>
        </div>
   

        <div style={{display:"flex",flexDirection:"row",gap:"20px"}}> 
      <h2>Servings:</h2>
        <p>{recipe?.servings}</p>
        <h2>Time:</h2>
        <p>{recipe?.time}</p>
      </div>
      <h2>Directions:</h2>
      <p className="directions">{recipe?.directions}</p>
      <h2>Notes:</h2>
      <p>{recipe?.notes}</p>
    
     


      </div>
    </div>
  );
};
export { Template };
