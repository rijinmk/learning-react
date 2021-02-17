import React, { Component } from 'react';
import Search from './Search/Search'; 
import ImageCard from './ImageCard/ImageCard'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search></Search>
        <hr/>
        <div className="image-card-container">
          <ImageCard></ImageCard>
        </div>
      </div>
    );
  }
}

export default App;
