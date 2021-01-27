import React, { useState, useEffect } from 'react';



function Search () {
    
    /*State managers*/
    const[error, setError] = useState(null);
    const[isLoaded, setIsLoaded] = useState(false);
    const[items, setItems] = useState([]);
    const [search, setSearch] = useState();


    useEffect(() => { //runs the fetchItems function after the component mounts
        fetchItems();
    }, []); //empty brackets ensures that useEffect will only run after the component mounts

    
    const fetchItems = async () => { //makes an async call to discogs api
        const data = await fetch ( //fetches data from discogs api and assigns it to a data variable
            `https://api.discogs.com/database/search?q=Nirvana`, {headers}
        );

        const items = await data.json(); //converts data from fetchItems to .json
        console.log(items);

        setArtists(items.artists); //sets artist state from artist data fetched from discogs API
    };

    return(
        <div>
            {artists.map(artist => ( //maps through artists array and returns key/value data for each artist
                <h1 key={artist.id}>{artist.name}</h1> //displays artist name in header
            ))}
        </div>
    );
}

export default Search;