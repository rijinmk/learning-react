import classes from './index.module.css'; 

import { Header } from './Components/Header/Header'; 
import { Search } from './Components/Search/Search'; 
import { Dog } from './Components/Dog/Dog'; 
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import { useState } from 'react';
import { MultipurposeContext } from './MultipurposeContext'; 

function App() {

  console.log(classes); 
  const [selectedDog, setSelectedDog] = useState(null); 

  const setSelectedDogHandler = (dog) => {
    setSelectedDog(dog); 
  }

  return (
    <div className={classes.App}>
      <Header />
      <MultipurposeContext.Provider value={{ setSelectedDogHandler, selectedDog }}>
        <Search />
      </MultipurposeContext.Provider>
      {selectedDog && <Dog {...selectedDog} />}
    </div>
  );
}

export default App;
