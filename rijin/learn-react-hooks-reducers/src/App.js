import {Fragment, useState, createContext} from 'react'; 

import Header from './components/Header/Header';
import Todo from './components/Todo/Todo';
import { TodoContext } from './contexts/TodoContext'; 

import ReactDOM from 'react-dom';
import { Route, Switch, Router, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'

import Home from './components/Test/Home';
import About from './components/Test/About';

function App() {

  const [newTodo, setNewTodo] = useState(''); 

  const addTodoHandler = (text) => {
    console.log("From App.js: ", text); 
    setNewTodo(text); 
  }

  return (
      <Fragment>
        <TodoContext.Provider value={{newTodo}}>
          <Header addTodo={addTodoHandler} />
          <Todo todo={newTodo} />
        </TodoContext.Provider>

      <BrowserRouter>

          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>

          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
      </BrowserRouter>


      </Fragment>
  );
}

export default App;
