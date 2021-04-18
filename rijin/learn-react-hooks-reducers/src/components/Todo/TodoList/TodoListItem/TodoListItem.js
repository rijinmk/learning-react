import classes from './TodoListItem.css'; 

const TodoListItem = (props) => {
    return (
        <li {...props}>
            {props.children}
            <span className="close">X</span>
        </li>
    ); 
}

export default TodoListItem; 