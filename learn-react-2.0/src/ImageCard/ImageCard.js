import React, {useEffect} from 'react'; 

const ImageCard = (props) => {

    useEffect(() => {
        console.log("Component Did Mount");
        return () => {
            console.log("Component Unmounted");
        }
    }, [])

    return(
        <div class="ex-image-card">
            <h1>Image Card</h1>
            <p>Keyword <span>Keyword</span></p>
        </div>
    );
}

export default ImageCard; 