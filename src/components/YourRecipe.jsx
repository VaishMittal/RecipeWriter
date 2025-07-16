import React from 'react'

const YourRecipe = ({recipeData , handleSelectedDish,selectedDish}) => {
  return (
    <div>
      <ul>
      {recipeData.map((data)=>
      <li 
      onClick={()=>handleSelectedDish(data.id)} 
      className={`dishes ${selectedDish === data.id ? "active" : ""}`}
      key={data.dish} >
      {data.dish}
      </li>
      )}
      </ul>
    </div>
  )
}

export default YourRecipe
