import React, { useEffect, useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList'; 
import Search from './Search';

function Ingredients() {

  let url = "https://react-burger-builder-9bc18-default-rtdb.firebaseio.com/ingredients.json";

  const [ingredients, setIngredients] = useState([]); 

  useEffect(() => {
    (async () => {
      let ingredientsData = await fetch(url);
      ingredientsData = await ingredientsData.json();
      let _ = []; 
      if ( ingredientsData ){
        Object.keys(ingredientsData).forEach((e) => {
          ingredientsData[e].id = e; 
          _.push(ingredientsData[e]);
        }); 
        setIngredients(_); 
      }
      console.log("From useEffect: ", ingredientsData);
    })(); 
    return () => {}
  }, []); 

  const addIngredientHandler = async (ingredient) => {
    console.log(JSON.stringify(ingredients));
    let jsonData = await fetch(url, { method: "POST", body: JSON.stringify(ingredient)});
    jsonData = await jsonData.json(); 
    console.log(jsonData); 
    setIngredients((prevIngredients) => {
      let appendedIngredients = [...prevIngredients, { id: jsonData.name, ...ingredient }];
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
