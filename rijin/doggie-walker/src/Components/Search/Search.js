import React, { useEffect } from 'react'

export const Search = () => {

    useEffect(() => {
        (async () => {
            let dogs = await fetch(
                'https://api.thedogapi.com/v1/breeds?attach_breed=0', 
                { 
                    method: "GET", 
                    "x-api-key": "27b47624-9780-4abe-bbb3-d8b516137750"
                },
            );
            dogs = await dogs.json();
            console.log("[Dog.js]: ", dogs);
        })()
    }, []); 

    return (
        <div>
            Search + AutoSuggest
        </div>
    )
}
