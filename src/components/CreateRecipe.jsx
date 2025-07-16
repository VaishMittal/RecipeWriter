import React from 'react'
// import './CreateRecipe.css'

const CreateRecipe = ({onOpenForm}) => {
  return (
    <div>
      <button className='createbut' onClick={onOpenForm}>Create Recipe</button>
    </div>
  )
}

export default CreateRecipe
