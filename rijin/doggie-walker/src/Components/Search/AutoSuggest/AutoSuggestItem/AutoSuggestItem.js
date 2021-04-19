import { useContext, useRef, useState } from 'react';
import classes from './AutoSuggestItem.module.css'; 
import { MultipurposeContext } from '../../../../MultipurposeContext'; 

const AutoSuggestItem = (props) => {

    const [selected] = useState(''); 
    const listItemRef = useRef(null); 

    const ctx = useContext(MultipurposeContext);
    console.log("[AutoSuggestItem.js]: ", ctx);

    return(
        <li ref={listItemRef} onClick={() => ctx.setSelectedDogHandler(JSON.parse(props.json))}  data-dog-id={props.dogID} className={classes.AutoSuggestItem}>
            <img src={props.image} />
            <p>{props.text}</p>
        </li>
    ); 
}

export default AutoSuggestItem; 