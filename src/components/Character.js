// Write your Character component here
import React from 'react';
import styled from 'styled-components';


const Body = styled.div`
width: 75%;
font-size: 1.2rem;
`;


function Character(props) {
    const {res} = props
    
    console.log(props);
    return (
  <Body>
      <p>{}</p>
  </Body>
  
    )
  
}

export default Character;