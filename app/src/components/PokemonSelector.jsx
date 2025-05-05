import { useEffect, useState } from 'react'
import './PokemonSelector.css'
import logic from '../logic'
import SelectGrid from './SelectGrid'
import PreEvoCheckbox from './PreEvoCheckbox'

function PokemonSelector({ type, game, onClose, onSubmit }) {
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

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!activeFinalStage) {
            alert('Please select a Pokémon before submitting')
            return
        }

        try {
            await logic.updateTeam(game, type.toLowerCase(), activeFinalStage)
            onClose()
        } catch (error) {
            alert(error.message)
        }
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