import { useEffect, useState } from 'react'
import './PokemonSelector.css'
import logic from '../logic'
import SelectGrid from './SelectGrid'
import PreEvoCheckbox from './PreEvoCheckbox'

function PokemonSelector({ type, game, onClose }) {
    const [availableFinalStages, setAvailableFinalStages] = useState([])
    const [activeFinalStage, setActiveFinalStage] = useState(null)
    const [selectedPreEvos, setSelectedPreEvos] = useState([])

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

    const handleSubmit = (e) => {
        const selectedPokemon = [...selectedPreEvos, activeFinalStage]
        e.preventDefault()
        console.log(selectedPokemon)
        onClose()
    }
    
    return <>
        <div className='pokemon-selector'>
            <form onSubmit={handleSubmit}>
                <img 
                    src='\icons\x-circle.svg'
                    onClick={() => {
                        setActiveFinalStage([])
                        setActiveFinalStage(null)
                        onClose()}
                    }                        
                    alt='Close'
                    className='close-button'
                />
                <div className='pokemon-picker'>
                    <SelectGrid finalStages={filteredByType} setActiveFinalStage={setActiveFinalStage}/>
                </div>

                <div style={{ marginBottom: '10px' }}>
                    {!!activeFinalStage 
                        ? <PreEvoCheckbox 
                            id={activeFinalStage} 
                            game={game}
                            onSelectionChange={setSelectedPreEvos}/> 
                        : <h3>Pick a Pokémon</h3>}
                </div>

                {!!activeFinalStage && <button className='submit-button'>Submit this Pokémon</button> }
            </form>
        </div>
    </>
}

export default PokemonSelector