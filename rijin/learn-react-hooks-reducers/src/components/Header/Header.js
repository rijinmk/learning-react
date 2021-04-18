import { useState } from "react";

const Header = (props) => {

    const [todo, setTodo] = useState(''); 

    const getTodoTextHandler = (e) => {
        setTodo(e.target.value);
    }

    return(
        <header>
            <input onChange={getTodoTextHandler} type="text"/>
            <button onClick={() => props.addTodo(todo)}>+</button>
            <hr/>
        </header>
    ); 
}

export default Header; 