// Write your Character component here
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axsio';


const [swCharacter, setSwCharacter] = useState([]);

function Character(props) {
    useEffect(() => {
        axios.get("https://swapi.dev/api/people/")
        .then((res) => {
          console.log(res.data);
          setSwCharacter(res.data.name);
          return (
        <div>
            <h3>{res.data.name}</h3>
            <p>{res.data.name}</p>
        </div>
        
          )
        })
        .catch((err) => {
          console.log(err);
        })
      }, [])
      


  
}

export default Character;