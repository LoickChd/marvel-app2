import React from 'react';
import { useState, useEffect } from 'react';
import { getCharacters } from '../api/character-api';
import { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


const CompareCharactersPage = () => {
    // change the title of the page
    document.title = "Compare | Marvel App";

    // to be replaced with the real data
    const [characters, setCharacters] = useState([]);

    // transform the characters to array of label/value objects
    const options = characters.map((character, index) => ({
        value: index,
        label: character.name,
    }));

    // set the default options to the first two characters
    const [option1, setOption1] = React.useState(options[0]);
    const [option2, setOption2] = React.useState(options[1]);

    const centerStyle = {
        textAlign: 'center',
        width: 500,
    };

    useEffect(() => {
        const characters = getCharacters();
        setCharacters(characters);
        setOption1(characters[0]);
        setOption2(characters[1]);
    }, []);

    return (
        <>
            <h2>Compare characters</h2>

            <p style={centerStyle}>
            <select
                value={option1?.id}
                onChange={(event) => setOption1(characters.find(character => character.id === event.target.value))}
>
                    {characters.map((character) => (
                        <option key={character.id} value={character.id}>
                            {character.name}
                        </option>
                    ))}
                </select>&nbsp; {/* Fix the ambiguous spacing */}
                with&nbsp;
                <select
                    value={option2?.id}
                    onChange={(event) => setOption2(characters.find(character => character.id === event.target.value))}
>
                    {characters.map((character) => (
                        <option key={character.id} value={character.id}>
                            {character.name}
                        </option>
                    ))}
                </select>
            </p>

            <p style={centerStyle}>
            <img src={`${option1?.thumbnail.path}.jpg`} alt={option1?.name} style={{width: "150px"}} /> vs <img src={`${option2?.thumbnail.path}.jpg`} alt={option2?.name} style={{width: "150px"}} />
            </p>
            <p style={centerStyle}>
            {option1?.name} vs {option2?.name}
            </p>


                
            <RadarChart outerRadius={90} width={730} height={250} data={characters}>
            <PolarGrid />
            <PolarAngleAxis dataKey="capacities" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar name={option1?.name} dataKey={option1?.force} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Radar name={option2?.name} dataKey={option2?.force} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>

        </>
    );
 
};

export default CompareCharactersPage;