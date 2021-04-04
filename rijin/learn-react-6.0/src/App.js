import {useState, useEffect} from 'react';

import AddCard from './AddCard/AddCard';
import Card from './Card/Card'; 

function App() {

  const [cardsState, setCardState] = useState([]); 

  return (
    <div className="App">
      <AddCard cardStateProp={cardsState} setCardsStateProp={setCardState}></AddCard>
      <hr/>
      {cardsState ? cardsState : ''}
    </div>
  );
}

export default App;
