import NbCharacters from './components/compteur.js'
import ListeCharacters  from './components/liste.js'
import Title from './components/title.js';

const characters = require('./data/characters.json')

function Charac() {
return (
  <>
    <br></br>
    <Title>Marvels characters</Title>
    <ListeCharacters characters={characters}/>
    <NbCharacters characters={characters}/>
  </>
);
}

export default Charac;