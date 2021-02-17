import React, { useEffect, useState } from 'react';
import { createClient } from 'pexels'; 
const client = createClient('563492ad6f91700001000001a23c7a9873cd465ca65f787302e37bd0');

const imageCard = () => {

    const [imageState, setImageState] = useState(null); 
     
    useEffect(() => {
        client.photos.search({ query: "Nature", per_page: 10 })
        .then((photos) => {
            console.log(photos); 
            setImageState(photos.photos[0].src.large);
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
            <div style={{backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmES3KRHg9t--RPIcR5ah9J2I-qvZNlZ91Cg&usqp=CAU")`}} className="ex-image-card__image--dummy"></div>
            <div style={{backgroundImage: `url("https://i.pinimg.com/originals/9e/13/96/9e13961797e766715094359972b12816.jpg")`}} className="ex-image-card__image--dummy"></div>
            <div style={{backgroundImage: `url("https://media.istockphoto.com/vectors/abstract-background-vector-id1137915894?k=6&m=1137915894&s=612x612&w=0&h=rXeW2Wxa3ltQh1XCcn_YgtuDutoJGI9bI6AKo39HIKc=")`}} className="ex-image-card__image--dummy"></div>
            <div style={{backgroundImage: `url("https://images.ctfassets.net/hrltx12pl8hq/3AsFaYVIMILNarajvLPTTb/d6f1f3b5e7d62f19eedf7a47a2dd129a/07-abstract_1445018480.jpg?fit=fill&w=480&h=270")`}} className="ex-image-card__image--dummy"></div>
            
            <div style={{backgroundImage: `url("${imageState}")`}} className="ex-image-card__image"></div>
            
            <h2>Nature</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, minima?</p>
        </div>
    ); 
}

export default imageCard;