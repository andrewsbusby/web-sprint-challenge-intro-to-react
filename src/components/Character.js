// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const Chardiv = styled.div`
    background-color: rgba(91,52,31, 0.7);
    font-weight: bold;
    width: 45%;
    margin: auto;
`
const H3 = styled.h3`
    font-size: 1.4rem;
    color: #A89B92;

`

function Char(props){
    const {data} = props

    console.log(props);

    if(!data) return <h4>Loading...</h4>

    return(
        <Chardiv>
            <H3>Name: {data.name}</H3>
            <p>Height: {data.height}</p>
            <p>Mass: {data.mass}</p>
            <p>Hair Color: {data.hair_color}</p>
            <p>Birth Year: {data.birth_year}</p>
            <p>Films: {data.films}</p>
        </Chardiv>
    )

}

export default Char;