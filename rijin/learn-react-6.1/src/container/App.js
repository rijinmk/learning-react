import React, { Component } from 'react';
import {v4 as uuid} from 'uuid'; 
import Card from '../components/Card/Card'; 
import AddCard from '../components/AddCard/AddCard';
import WithClass from '../HOC/widthClass'; 
import AuthContext from '../context/auth-context'; 

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] constructor'); 
    this.state = {
      cards: [], 
      authenticated: false, 
    }
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state; 
  }

  static contextType = AuthContext; 

  componentDidMount(){
    console.log('[App.js] componentDidMount');
    console.log(this.context); 
  }

  handleAddCard = () => {
    let addCardText = document.querySelector("#add-card-input").value;
    this.setState({
      cards: [...this.state.cards, <Card key={uuid()} text={addCardText}></Card>]
    }); 
  }

  render() {
    console.log('[App.js] render'); 
    return (
      <div>
        <AuthContext.Provider value={{authenticated: this.state.authenticated}}>
          <AddCard clicked={this.handleAddCard}></AddCard>
          <hr/>
          {this.state.cards}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default WithClass(App, 'OMG_NEW_HOC');
