import React, { Component } from 'react';
import './App.css';

// Importing Components
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'; 

class App extends Component {
  state = {
    usernames: [
      "rijinmk1",
      "hello"
    ]    
  }

  stateManipulator = (event) => {
    this.setState({
      usernames: [
        event.target.value,
        "hello123"
      ]
    });
  }



  render() {
    return (
      <div className="App">
        <button onClick={this.stateManipulator}>CLICK</button>
        <hr/>
        <UserInput username={this.state.usernames[0]} changer={this.stateManipulator}></UserInput>
        <hr/>
        <UserOutput username={this.state.usernames[0]}></UserOutput>
        <UserOutput username={this.state.usernames[1]}></UserOutput>
      </div>
    );
  }
}

export default App;
