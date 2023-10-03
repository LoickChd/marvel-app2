import NumberCharacters from "./components/compteur.js"
import ListeCharacters from "./components/liste.js"
import Title from "./components/titre.js"
           
function App() {
return (
  <>
    {/* 
        La propriété id et data-demo sont passées au composant Title grâce au spread operator.
        La propriété color est définie dans le composant Title
     */}
    <Title color="black" id="my-id" data-demo="demo">Liste de personnage</Title>
    <ListeCharacters></ListeCharacters>
    <NumberCharacters/>
  </>
);
}

export default App;