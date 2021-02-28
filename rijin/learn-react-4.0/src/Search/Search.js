import React from 'react';
import '../bundle.min.css'; 

const search = (props) => {
    return (
        <div className="ex-search">
            <input type="text" id="search-input"/>
            <input type="button" onClick={props.handleClick} value="+"/>
        </div>
    ); 
}

export default search; 