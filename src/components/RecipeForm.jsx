import React, { useState } from 'react';
import './RecipeForm.css';

const RecipeForm = ({ setOpenForm, handleRecipeData }) => {
  const [formData, setFormData] = useState({
    dish: '',
    writtenBy: '',
    image: '',
    ingredients: [],
    directions: '',
    notes: '',
    servings: '',
    time: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "ingredients" ? value.split(",").map(item => item.trim()): value,
    }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    handleRecipeData(formData);  
    // console.log(formData)
    setOpenForm(false);  
  }

  return (
    <div>
      <form className='myform' onSubmit={handleFormSubmit}>
        <div className='formbox'>
        <div className='formcol'>
        <label>Dish:</label>
        <input name="dish" value={formData.dish} onChange={handleChange} placeholder='Enter dish name' required />

        <label>Written By:</label>
        <input name="writtenBy" value={formData.writtenBy} onChange={handleChange} placeholder='Enter your name' required />

        <label>Image link:</label>
        <input name="image" value={formData.image} onChange={handleChange} placeholder='Enter image URL'  />

        <label>Ingredients:</label>
        <textarea name="ingredients" value={formData.ingredients} onChange={handleChange} placeholder='Enter ingredients'  />

        <label>Time:</label>
        <input name="time" value={formData.time} onChange={handleChange} placeholder='Time taken to make'  />

        </div>
        <div className='formcol ' >
        <label>Directions:</label>
        <textarea name="directions" className='directions' value={formData.directions} onChange={handleChange} placeholder='Write directions'  />

        <label>Notes:</label>
        <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder='Write notes (if any)'  />

        <label>Servings:</label>
        <input name="servings" value={formData.servings} onChange={handleChange} placeholder='Number of servings'  />
        
        </div>
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={() => setOpenForm(false)}>Close</button>
      </form>
    </div>
  );
};

export default RecipeForm;
