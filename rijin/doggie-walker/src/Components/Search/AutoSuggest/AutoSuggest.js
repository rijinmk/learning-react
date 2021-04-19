import { useContext, useEffect, useState } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import AutoSuggestItem from "./AutoSuggestItem/AutoSuggestItem"
import { MultipurposeContext } from '../../../MultipurposeContext'; 

import classes from './AutoSuggest.module.css'; 

const AutoSuggest = (props) => {

    let [_autoSuggestItemJSX, setAutoSuggestItemJSX] = useState([]); 
    const ctx = useContext(MultipurposeContext);

    useEffect(() => {
        let searchResults = props.searchResult;
        let autoSuggestItemJSX = []; 
        searchResults.forEach(e => {
            if (e.reference_image_id) {
                // console.log("---> ", e.);
                autoSuggestItemJSX.push(
                    // <li key={e.id} data-id={`/dog/${e.id}`}>
                        <AutoSuggestItem 
                            key={e.id}
                            dogID={e.id}
                            text={e.name}
                            json={JSON.stringify(e)}
                            image={`https://cdn2.thedogapi.com/images/${e.reference_image_id}.jpg`} />
                    // </li>
                ); 
            }
        });
        console.log("[AutoSuggest.js] Checking the CTX", ctx.selectedDog);
        if (ctx.selectedDog){
            autoSuggestItemJSX = []; 
        }
        setAutoSuggestItemJSX(autoSuggestItemJSX);
    }, [props.searchResult, ctx.selectedDog]);

    return(
        <Router>
            <ul className={classes.AutoSuggestList}>
                {_autoSuggestItemJSX}
            </ul>
        </Router>
    ); 
}

export default AutoSuggest; 