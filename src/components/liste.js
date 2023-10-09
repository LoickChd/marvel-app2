import React, { useState } from 'react';
import Character from './detail.js'


function ListeCharacters({characters}){
  const vide = characters.length > 0;

  const [unCaracter, setSelection] = useState(0);
  const handleOnClick = (index) => {
    setSelection(index);
  };
    return(
    
    vide ? <ul>
          {characters.map((item, index) => (
            <li key={item.id} onClick={() => handleOnClick(index)}>{item.name}</li> 
          ))}
          <br></br>
          <Character character = {characters[unCaracter]}/>
          </ul> : "Il n'y a pas de caractères");
          }

export default ListeCharacters;                        