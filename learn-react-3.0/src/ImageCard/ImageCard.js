import React, {useState, useEffect} from 'react';
import { createClient } from 'pexels';  
import './ImageCard.css'; 

const client = createClient('563492ad6f91700001000001a23c7a9873cd465ca65f787302e37bd0');
const query = 'Nature';

const imageCard = (props) => {

    const [imageState, setImageState] = useState(null);
    
    useEffect(() => {
        client.photos.search({ query: props.q, per_page: 1 })
            .then(photos => {
                setImageState(photos.photos[0].src.small);
            })
            .catch(error => {
                console.log(error); 
            }); 
        return () => {
            console.log("Component unmounted"); 
        }
    }, [])

    return(
        <div className="ex-image-card">
            <img src={imageState} alt=""/>
            ImageCard: <span>{props.q}</span>
        </div>
    );
}

export default imageCard;