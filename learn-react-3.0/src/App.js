import React, { Component } from 'react';
import Search from './Search/Search';
import ImageCard from './ImageCard/ImageCard'; 

class App extends Component {

  state = {
    ImageCards: []
  }

  addImageCard = () => {
    console.log("clicked"); 
    let q = document.querySelector(".ex-search input[type='text']").value;
    this.setState({
      ImageCards: [...this.state.ImageCards, <ImageCard key={Math.floor(Math.random() * 99999999)} q={q}></ImageCard>] 
    })
  }

  render() {
    return (
      <div className="App">
        <Search addImageCardHandler={this.addImageCard}></Search>
        {this.state.ImageCards}
      </div>
    );
  }
}

export default App;
