import React, {useEffect} from 'react'; 

const Search = (props) => {
    return(
        <div className="ex-search">
            <input type="text" className="search"/>
            <input type="button" onClick={props.clicked} className="mx-3" value="+"/>
            <div className="mt-3 mb-6"> <hr/> </div>
        </div>
    );
}

export default Search; 