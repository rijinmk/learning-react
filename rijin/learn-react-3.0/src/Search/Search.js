import React from 'react';

const search = (props) => {
    return(
        <div className="ex-search">
            <input type="text"/>
            <input type="button" onClick={props.addImageCardHandler} value="+"/>
            <hr/>
        </div>
    );
}

export default search; 