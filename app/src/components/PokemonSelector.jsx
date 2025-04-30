import { useEffect, useState } from 'react'
import './PokemonSelector.css'
import logic from '../logic'

function PokemonSelector({ type, game }) {
    const [availableFinalStages, setAvailableFinalStages] = useState([]) 

    useEffect(() => {
        try{
            logic.retrieveFinalStagesFromGame(game)
                .then(setAvailableFinalStages)
                .catch(error => alert(error))
        } catch (error) {
            alert(error)
        }
    },[game])

    const filteredByType = availableFinalStages.filter(pokemon => pokemon.type.includes(type))

    return <>
        <div className='pokemon-selector'>
            <h1>Selecting a {type} Pokémon for {game}</h1>
        </div>
    </>
}

export default PokemonSelector