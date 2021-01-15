import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      {id: 'ad09j', name: "Rijin", age: 23},
      {id: 'ad02j', name: "Elon", age: 56},
      {id: 'ad04j', name: "Musk", age: 22}, 
    ],
    showPeople: true,
  }

  deletePerson = (id) => {
    let copyOfPeople = [...this.state.people];
    for(let i=0; i<copyOfPeople.length; i++){
      if(copyOfPeople[i].id===id){
        copyOfPeople.splice(i,1);
      } 
    }
    this.state.people = copyOfPeople; 
    this.setState({
      people: copyOfPeople
    });
  }

  updateNameOfPeople = (id, event) => {
    let copyOfPeople = [...this.state.people];
    for (let i = 0; i < copyOfPeople.length; i++) {
      if (copyOfPeople[i].id === id) {
        copyOfPeople[i].name = event.target.value;
        console.log(copyOfPeople[i][id]); 
        break; 
      }
    }
    console.log(copyOfPeople);
    this.setState({
      people: copyOfPeople 
    });
  }

  people = null; 
  renderJSXPeople(){
    if(this.state.showPeople){
      this.people = []; 
      for(let i=0; i<this.state.people.length; i++){
        this.people.push(<Person change={this.updateNameOfPeople.bind(this, this.state.people[i].id)} delete={this.deletePerson.bind(this, this.state.people[i].id)} key={this.state.people[i].id} name={this.state.people[i].name} age={this.state.people[i].age} />);  
      }
      return this.people; 
    }else{
      this.people = null; 
    }
  }

  showPeopleToggle = () => {
    console.log(this.state.showPeople); 
    this.setState({
      showPeople: !this.state.showPeople
    });
  }

  changePeopleName = (event) => {
    this.setState({
      people: [
        { name: event.target.value }
      ]
    }); 
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.changePeopleName} type="text"/>
        <button onClick={this.showPeopleToggle}>Show people</button>
        <hr/>
        {this.renderJSXPeople()}
      </div>
    );
  }
}

export default App;
