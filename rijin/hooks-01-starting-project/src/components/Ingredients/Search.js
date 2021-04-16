import React, { useState, useEffect, useRef } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {

  let url = "https://react-burger-builder-9bc18-default-rtdb.firebaseio.com/ingredients.json";

  const [enteredFilter, setEnteredFilter] = useState(''); 
  const inputRef = useRef(); 

  useEffect(() => {
    // console.log("Use effect is triggered"); 
    let timeOut = setTimeout(async() => {
      console.log("---------------------------------------"); 
      console.log("enteredFilter", "inputRef.current.value");
      console.log(enteredFilter, inputRef.current.value);
      console.log("---------------------------------------");

      if (enteredFilter === inputRef.current.value){
        let q = enteredFilter.length===0 ? '' : `?orderBy="title"&equalsTo="${enteredFilter}"`;
        console.log("From useEffect: ", url + q);
        let jsonData = await fetch(url + q);
        jsonData = await jsonData.json();
        console.log(jsonData);
      }
    }, 1000); 

    return () => {
      clearTimeout(timeOut); 
    }


  }, [enteredFilter]);

  const searchChangeHandler = (e) => {
    setEnteredFilter(e.target.value); 
  }

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input ref={inputRef} type="text" onChange={(e) => {searchChangeHandler(e)}} />
        </div>
      </Card>
    </section>
  );
});

export default Search;
