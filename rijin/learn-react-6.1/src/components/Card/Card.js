import React, { Component, useEffect, useState, useRef, useContext } from 'react';
import './Card.css';
import AuthContext from '../../context/auth-context'; 

// class Card extends Component {

//     state = {
//         counter: 0
//     }

    // handleAdd = () => {
    //     this.setState((prevState, props) => {
    //         return {
    //             counter: prevState.counter + 1
    //         } 
    //     }); 
    // }

//     render(){
//         return (
            // <div className="ex-card">
            //     <h1>{this.state.counter}</h1>
            //     <p>{this.props.text}</p>
            //     <button onClick={this.handleAdd}>+</button>
            // </div>
//         );
//     }
// }

const Card = (props) => {

    const [counter, setCounter] = useState(0);
    const plusBtn = useRef(null);  
    const authContext = useContext(AuthContext); 

    useEffect(() => {
        console.log(plusBtn);
        // setInterval(() => {
        //     console.log(plusBtn.current, "hi");
        //     plusBtn.current.click(); 
        // }, 10);
        console.log('FROM FUNCTIONAL: ', authContext);
        return () => {

        }
    }, []); 

    const handleAdd = () => {
        let c = counter; 
        c+=1;  
        setCounter(() => {
            return c; 
        });
    }

    return (
        <div className="ex-card">
            <h1>{counter}</h1>
            <p>{props.text}</p>
            <button ref={plusBtn} onClick={handleAdd}>+</button>
        </div>
    ); 
}

export default Card;
