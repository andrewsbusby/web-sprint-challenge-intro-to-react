// Write your Character component here
import React from 'react';

function Char(props){
    const {data} = props

    console.log(props);
// debugger
    if(!data) return <h4>Loading...</h4>

    return(
        <div>
            <h3>Name: {data.name}</h3>
            <p>Height: {data.height}</p>
            <p>Mass: {data.mass}</p>
            <p>Hair Color: {data.hair_color}</p>
            <p>Birth Year: {data.birth_year}</p>
            <p>Films: {data.films}</p>
        </div>
    )

}

export default Char;