import React, { useContext, useEffect, useRef, useState } from 'react'
import AutoSuggest from './AutoSuggest/AutoSuggest';
import { MultipurposeContext } from '../../MultipurposeContext';

export const Search = () => {

    const [breed, setBreed] = useState(''); 
    const [autoSuggestList, setAutoSuggestList] = useState([]); 
    const ctx = useContext(MultipurposeContext);
    const searchRef = useRef(); 

    useEffect(() => {
        console.log(breed); 
        let c = setTimeout(() => {
            (async () => {
                let dogs = await fetch(
                    `https://api.thedogapi.com/v1/breeds/search?q=${breed}`,
                    { 
                        method: "GET", 
                        "x-api-key": "27b47624-9780-4abe-bbb3-d8b516137750"
                    },
                );
                dogs = await dogs.json();
                console.log(dogs); 
                setAutoSuggestList(dogs);
            })()
        }, 500); 

        return () => {
            clearTimeout(c); 
        }

    }, [breed]);

    const searchHandler = () => {
        ctx.setSelectedDogHandler(null); 
        setBreed(searchRef.current.value);
    }

    return (
        <div>
            <input type="text" ref={searchRef} onChange={searchHandler} placeholder="Search Breed..."/>
            <AutoSuggest searchResult={autoSuggestList} />
        </div>
    )
}
