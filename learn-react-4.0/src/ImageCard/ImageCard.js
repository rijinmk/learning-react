import React, { useEffect, useState } from 'react';
import { createClient } from 'pexels'; 
const client = createClient('563492ad6f91700001000001a23c7a9873cd465ca65f787302e37bd0');

const imageCard = (props) => {

    const [imageState, setImageState] = useState(null); 
     
    useEffect(() => {
        client.photos.search({ query: props.q, per_page: 5 })
        .then((photos) => {
            console.log(photos); 
            setImageState(photos.photos);
        })
        .catch((error) => {
            console.log(error); 
        });
        return () => {
            console.log("Component unmounted"); 
        }
    }, []); 

    return (
        <div className="ex-image-card">
            {/* Dummy divs for animation purposes */}
            <div style={{backgroundImage: `url("${imageState ? imageState[1].src.large : ''}")`}} className="ex-image-card__image--dummy"></div>
            <div style={{backgroundImage: `url("${imageState ? imageState[2].src.large : ''}")`}} className="ex-image-card__image--dummy"></div>
            <div style={{backgroundImage: `url("${imageState ? imageState[3].src.large : ''}")`}} className="ex-image-card__image--dummy"></div>
            <div style={{backgroundImage: `url("${imageState ? imageState[4].src.large : ''}")`}} className="ex-image-card__image--dummy"></div>
            
            <div style={{backgroundImage: `url("${imageState ? imageState[0].src.large : ''}")`}} className="ex-image-card__image"></div>
            
            <h2>{props.q}</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, minima?</p>
        </div>
    ); 
}

export default imageCard;