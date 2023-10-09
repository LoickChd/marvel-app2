function Character({character}){
    const url = character.thumbnail;
    return(
        url ?
    <>
      <h1>{character.name}</h1>
      <img src = {`${character.thumbnail.path}/standard_large.${character.thumbnail.extension}`}/>
      <p>{character.description}</p>
    </> : "Ce perso n'a pas d'image"
    );
  }
      
  export default Character;