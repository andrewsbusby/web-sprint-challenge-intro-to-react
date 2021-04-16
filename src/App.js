
import React, {useState, useEffect}  from 'react';
import './App.css';
import Character from './components/Character';
import axios from 'axios';
import styled from 'styled-components';

const H1style = styled.h1`
  font-size: 3rem;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [swCharacter, setSwCharacter] = useState([]);
  
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
    .then((res) => {
        setSwCharacter(res.data);

      
      
      
    
        
    })
    // .catch((err) => {
    //     console.log(err);
    // })
}, [])


return (
  <div className="App">
    <H1style className="Header">Characters</H1style>
    <Character data = {swCharacter} />
    {swCharacter.map((data) => {
      return <Character key={data} />
    })}
  </div>
);
}




export default App;
