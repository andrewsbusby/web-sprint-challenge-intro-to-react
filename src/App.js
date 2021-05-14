import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Char from './components/Character';

// Try to think through what state you'll need for this app before starting. Then build out
// the state properties here.

// Fetch characters from the API in an effect hook. Remember, anytime you have a 
// side effect in a component, you want to think about which state and/or props it should
// sync up with, if any.
const App = () => {

  const [starWarsCharacter, setStarWarsCharacter] = useState([]);
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
      setStarWarsCharacter(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, []) 
  
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {starWarsCharacter.map(item => {
        return <Char data={item}/>
      })}
    </div>
  );
}

export default App;
