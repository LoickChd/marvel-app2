import data from "../characters.json"
function ListeCharacters({characters}){
  if (characters.length == 0) {
    return <p>Pas de personnage</p>;
  } else {
    return (
      <ul>
        {characters.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    );
  }
}
export default ListeCharacters;