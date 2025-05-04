import { useEffect, useState } from 'react'
import './PokemonSelector.css'
import logic from '../logic'
import SelectGrid from './SelectGrid'
import PreEvoCheckbox from './PreEvoCheckbox'

function PokemonSelector({ type, game }) {
    const [availableFinalStages, setAvailableFinalStages] = useState([])
    const [activeFinalStage, setActiveFinalStage] = useState(null)

    const filteredByType = type ? availableFinalStages.filter(pokemon => pokemon.type.includes(type)) : availableFinalStages

    useEffect(() => {
        try{
            logic.retrieveFinalStagesFromGame(game)
                .then(setAvailableFinalStages)
                .catch(error => alert(error))
        } catch (error) {
            alert(error)
        }
    },[game])
    
    console.log('Active Final Stage: ', activeFinalStage)
    
    return <>
        <div className='pokemon-selector'>
            <form>
                <div className='pokemon-picker'>
                    <SelectGrid finalStages={filteredByType} setActiveFinalStage={setActiveFinalStage}/>
                </div>

                {!!activeFinalStage ? <PreEvoCheckbox id={activeFinalStage}/> : <h3>Pick a Pokémon</h3>}    
            </form>
        </div>
    </>
}

export default PokemonSelector