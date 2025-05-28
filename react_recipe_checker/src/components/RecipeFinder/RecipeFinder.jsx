import { useState } from 'react'
import './RecipeFinder.css'

function recipe_finder() {
  //const [loading, setLoading] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [recipe, setRecipe] = useState('');
  //const [error, setError] = useState('');

  const fetchMeals = async()=> {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      const meal = data.meals[Math.floor(Math.random() * 10) * data.meals.length];
      setRecipe(meal);
    }
    catch (error) {
      setError(`Error in fetching meal`);
    }
  }

  return (
    <>
      <div style={{height:"100vh", width:"100vw", backgroundColor:"red"}}>
       
      
      <h1>{ recipe.strMeal }</h1>
      <div className="card">
        <input  
          type="text"
          placeholder="Enter an ingredient (eg. chicken)"
          onChange = {(e)=>setIngredient(e.target.value)} 
          value = {ingredient}/>
        <button
          onClick = {fetchMeals}>
        </button>
          <img src={recipe.strMealThumb} alt=""/>
        <p>
          {recipe.strMeal}
        </p>
      </div>
     </div>
    </>
  )
}

export default recipe_finder
