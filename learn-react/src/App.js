import React, { useState } from 'react';
import Person from './Person/Person'; 
import './App.css';

const app = () => {
  const style = {
    backgroundColor: 'red',
    margin: '10px',
  }

  const [personState, setPersonState] = useState({
    person: [
      {name: "Carmella", age: Math.floor(Math.random() * 30)},
      {name: "Muhammad", age: Math.floor(Math.random() * 30)},
      {name: "Tyshawn", age: Math.floor(Math.random() * 30)},
    ]
  }); 

  const buttonHandler = (nn) => {
    setPersonState({
      person: [
        { name: nn, age: Math.floor(Math.random() * 30) },
        { name: "Lucie", age: Math.floor(Math.random() * 30) },
        { name: "Tobin", age: Math.floor(Math.random() * 30) },
      ]
    }); 
  }

  const nameChanger = (event) => {
    setPersonState({
      person: [
        { name: event.target.value, age: Math.floor(Math.random() * 30) },
        { name: "Lucie", age: Math.floor(Math.random() * 30) },
        { name: "Tobin", age: Math.floor(Math.random() * 30) },
      ]
    }); 
  }

  const renderPeople = () => {
    let people = []; 
    for(let i=0; i<personState.person.length; i++){
      people.push(<Person key={i} style={style} changed={nameChanger} click={buttonHandler.bind(this, "New NAMEEEE")} name={personState.person[i].name} age={personState.person[i].age}></Person>); 
    }
    return people; 
  }

  return (
    <div className="App">
      <button onClick={buttonHandler("HELLLLOOO")}>Click</button>
      {renderPeople()}
    </div>
  );
}

export default app;
