// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const Chardiv = styled.div`
    background-color: rgba(91,52,31, 0.7);
    font-weight: bold;
    width: 45%;
    margin: auto;
    box-shadow: 4px 4px 5px 2px black,
                -4px -4px 5px 2px black;
`
const H3 = styled.h3`
    font-size: 1.4rem;
    color: #A89B92;
    text-shadow: 2px 2px 3px black, 
                 -2px -2px 3px black;
`
const Para = styled.p`
    color: #ADAFAC;

`

function Char(props){
    const {data} = props

    console.log(props);

    if(!data) return <h4>Loading...</h4>

    return(
        <Chardiv>
            <H3>Name: {data.name}</H3>
            <Para>Height: {data.height}</Para>
            <Para>Mass: {data.mass}</Para>
            <Para>Hair Color: {data.hair_color}</Para>
            <Para>Birth Year: {data.birth_year}</Para>
            <Para>Films: {data.films}</Para>
        </Chardiv>
    )

}

export default Char;