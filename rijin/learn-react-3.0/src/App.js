import React, { Component } from 'react';
import Search from './Search/Search';
import ImageCard from './ImageCard/ImageCard'; 

class App extends Component {

  state = {
    ImageCards: []
  }

  addImageCard = (x, y) => {
    console.log("---> ", x, y); 
    console.log("clicked"); 
    let q = document.querySelector(".ex-search input[type='text']").value;
    this.setState({
      ImageCards: [...this.state.ImageCards, <ImageCard key={Math.floor(Math.random() * 99999999)} q={q}></ImageCard>] 
    })
  }

  render() {
    return (
      <div className="App">
        <Search addImageCardHandler={this.addImageCard.bind(this, "HELLO")}></Search>
        {this.state.ImageCards}
      </div>
    );
  }
}

export default App;
