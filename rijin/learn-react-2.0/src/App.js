import React, { Component } from 'react';
import './bootstrap.min.css';
import ImageCard from './ImageCard/ImageCard';
import Search from './Search/Search'

class App extends Component {

  ImageCardsHTML = []; 
  
  state = {
    ImageCards: []
  }


  addCardHandler = (elem) => {
    let search = document.getElementsByClassName("search")[0].value; 
    let copyImageCards = [...this.state.ImageCards]; 
    copyImageCards.push(<ImageCard q={search} key={Math.random() * 999999 + "-" + new Date().getMilliseconds()}></ImageCard>);
    this.setState({
      ImageCards: copyImageCards
    });
    console.log(copyImageCards); 
  }

  render() {
    return (
      <div className="App container mt-3">
        <Search clicked={this.addCardHandler}></Search>
        {this.state.ImageCards}
      </div>
    );
  }
}

export default App;
