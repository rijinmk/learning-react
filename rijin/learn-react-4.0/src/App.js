import React, { Component } from 'react';
import Search from './Search/Search'; 
import ImageCard from './ImageCard/ImageCard'; 

class App extends Component {

  state = {
    imageCards: []
  }; 

  getSearchInput = (x, y, z, a, b, c) => {
    console.log("X: ", x);
    console.log("Y: ", y);
    console.log("Z: ", z);
    console.log("A: ", a);
    console.log("B: ", b);
    console.log("C: ", c); 
    let search_q = document.getElementById("search-input").value; 
    console.log(search_q); 
    let copyImageCards = [...this.state.imageCards, <ImageCard key={Math.floor(Math.random() * 1000000)} q={search_q}></ImageCard>] 
    console.log(copyImageCards); 
    this.setState({
      imageCards: copyImageCards
    }); 
  }

  render() {
    return (
      <div className="App">
        <Search handleClick={this.getSearchInput}></Search>
        <hr/>
        <div className="image-card-container">
          <ImageCard q="Nature"></ImageCard>
          <ImageCard q="Happy"></ImageCard>
          {this.state.imageCards}
        </div>
      </div>
    );
  }
}

export default App;
