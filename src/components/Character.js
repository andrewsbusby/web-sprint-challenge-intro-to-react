// Write your Character component here
import React from 'react';
import styled from 'styled-components';


const Body = styled.div`
width: 75%;
font-size: 1.2rem;
`;


function Character(props) {
    const {data} = props
    
    if(!data) return <h3>Loading...</h3>; 
    
    // console.log(props);
    return (
  <Body>
      <h2>{data.name}</h2>
  </Body>
  
    )
  
}

export default Character;