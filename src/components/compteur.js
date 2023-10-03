const characters = require("../characters.json");
function NumberCharacters(){
    return(<h1>Number of characters : {characters.length}</h1>);
          }
export default NumberCharacters;