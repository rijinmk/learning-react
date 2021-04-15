import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList'; 
import Search from './Search';

function Ingredients() {

  const [ingredients, setIngredients] = useState([]); 

  const addIngredientHandler = (ingredient) => {
    console.log(ingredient);
    setIngredients((prevIngredients) => {
      let appendedIngredients = [...prevIngredients, { id: Math.floor(Math.random() * 999999), ...ingredient }];
      console.log(appendedIngredients);
      return appendedIngredients;
    }); 
  }

  const removeIngredientItemHandler = (ingredientID) => {
    ingredients.forEach((e, i) => {
      if (e.id === ingredientID){
        ingredients.splice(i, 1); 
      }
    }); 
    setIngredients([...ingredients]); 
  }

  return (
    <div className="App">
      <IngredientForm addIngredients={addIngredientHandler} />

      <section>
        <Search />
        {<IngredientList onRemoveItem={removeIngredientItemHandler} ingredients={ingredients} />}
      </section>
    </div>
  );
}

export default Ingredients;
