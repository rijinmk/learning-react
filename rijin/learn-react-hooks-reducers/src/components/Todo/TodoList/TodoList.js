import { Fragment, useEffect, useState, useReducer, useContext } from "react"
import TodoListItem from "./TodoListItem/TodoListItem"
import { TodoContext } from '../../../contexts/TodoContext';
import {Route, Switch, Router} from 'react-router-dom'; 

import Home from '../../Test/Home';
import About from '../../Test/About';

import './TodoList.css';

const reducer = (state, action) => {
    switch(action.type){
        case "ADD": 
            return { count: state.count + 1, todoList: [...state.todoList] }
        case "SUB": 
            return { count: state.count - 1, todoList: [...state.todoList] }
        case "ADD-TODO":
            return { count: state.count, todoList: [...state.todoList, <TodoListItem id={'todo-' + Math.floor(Math.random() * 1000)} key={Math.random() * 1000}>{action.todo}</TodoListItem>] }
        default: 
            throw new Error("Something went wrong"); 
    }
}

const TodoList = (props) => {

    const [{count, todoList}, dispatch] = useReducer(reducer, {count: 0, todoList: []});
    const {newTodo} = useContext(TodoContext);

    useEffect(() => {
        console.log(newTodo);
        dispatch({ type: "ADD-TODO", todo: newTodo  });
    }, [newTodo]);

    return(
        <>
            <h2>{count}</h2>
            <button onClick={() => dispatch({type: "ADD"})}>+</button>
            <button onClick={() => dispatch({type: "SUB"})}>-</button>
            <hr/>
            <ul className="todo--list">
                {todoList ? todoList : null}
            </ul>
        </>
    ); 
}

export default TodoList; 