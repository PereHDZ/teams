import { useEffect, useState } from 'react'
import './PokemonSelector.css'
import logic from '../logic'
import SelectGrid from './SelectGrid'

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

    const filteredByType = type ? availableFinalStages.filter(pokemon => pokemon.type.includes(type)) : availableFinalStages
    console.log(filteredByType)
    
    return <>
        <div className='pokemon-selector'>
            <form>
                <div className='pokemon-picker'>
                    <SelectGrid finalStages={filteredByType} />
                </div>

                <h3>Pick a Pokémon</h3>
            </form>
        </div>
    </>
}

export default PokemonSelector