import React, { useEffect, useState } from 'react'; 
import { createClient } from 'pexels';
import './ImageCard.css';

const client = createClient('563492ad6f91700001000001a23c7a9873cd465ca65f787302e37bd0');
const query = 'Nature';

const ImageCard = (props) => {

    const [imageState, imageSetState] = useState(null);

    useEffect(() => {
        let q = props.q; 
        client.photos.search({ query: q, per_page: 1 })
              .then(photos => {
                  console.log(photos.photos[0].src.landscape); 
                  imageSetState(photos.photos[0].src.landscape)
                })
                .catch(error => {
                    console.log("error"); 
                });
        return () => {
            console.log("Component Unmounted");
        }
    }, [])

    return(
        <div className="ex-image-card">
            <img src={imageState} alt=""/>
            <h1>Image Card</h1>
            <p>Keyword <span>Keyword</span></p>
        </div>
    );
}

export default ImageCard; 