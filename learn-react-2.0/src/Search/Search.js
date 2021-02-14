import React, {useEffect} from 'react'; 

const Search = (props) => {
    return(
        <div className="ex-search">
            <input type="text" class="search"/>
            <input type="button" onClick={props.clicked} class="mx-3" value="+"/>
            <div class="mt-3 mb-6"> <hr/> </div>
        </div>
    );
}

export default Search; 