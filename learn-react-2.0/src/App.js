import React, { Component, useState } from 'react';
import './bootstrap.min.css';
import ImageCard from './ImageCard/ImageCard';
import Search from './Search/Search'

class App extends Component {

  ImageCardsHTML = []; 
  const [ImageCardState, setImageCardState] = useState(false);


  addCardHandler = (elem) => {
    let search = document.getElementsByClassName("search")[0]; 
    this.ImageCardsHTML.push(<ImageCard></ImageCard>);
    console.log(this.ImageCardsHTML); 
  }

  render() {
    return (
      <div className="App container mt-3">
        <Search clicked={this.addCardHandler}></Search>
        {this.ImageCardsHTML}
      </div>
    );
  }
}

export default App;
