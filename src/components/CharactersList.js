import { Link } from "react-router-dom";
import {format} from 'date-fns';

export function CharactersList({ characters = [] }) {
    return (
        <ul id="characters">
            {characters.map((character) => {
                const date = new Date(character.modified);
                const formattedDate = format(date, 'LLLL dd , yyyy');
                return (
                    <li key={character.id}>
                        <Link to={`/characters/${character.id}`} data-testid={`character-link-${character.id}`}>
                        <strong>{character.name}</strong>       <small>{formattedDate}</small> 
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}