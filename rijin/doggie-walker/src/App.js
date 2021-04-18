import classes from './index.module.css'; 

import { Header } from './Components/Header/Header'; 
import { Search } from './Components/Search/Search'; 
import { Dog } from './Components/Dog/Dog'; 

function App() {

  console.log(classes); 

  return (
    <div className={classes.App}>
      <Header />
      <Search />
      <Dog />
    </div>
  );
}

export default App;
