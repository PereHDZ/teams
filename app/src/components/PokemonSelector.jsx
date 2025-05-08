import { useEffect, useState } from 'react'
import './PokemonSelector.css'
import logic from '../logic'
import SelectGrid from './SelectGrid'
import PreEvoCheckbox from './PreEvoCheckbox'

function PokemonSelector({ type, game, onClose }) {
    const [availableFinalStages, setAvailableFinalStages] = useState([])
    const [activeFinalStage, setActiveFinalStage] = useState(null)
    const [selectedPreEvos, setSelectedPreEvos] = useState([])
    const [team, setTeam] = useState({})
    const [previousIds, setPreviousIds] = useState([])

    const usedIds = Object.values(team).filter(Boolean)     

    const filteredByType = type && type !== 'Misc'
    ? availableFinalStages
        .filter(pokemon => pokemon.type.includes(type))
    : availableFinalStages

    const filteredById = filteredByType.filter(pokemon => {
        return !usedIds.includes(pokemon.id) || pokemon.id === activeFinalStage
    })

    useEffect(() => {
        try {
            logic.retrieveTeamByGame(game)
                .then(data => {
                    setTeam(data)
                    
                    const typeKey = type.toLowerCase()
                    const finalStageId = data[typeKey]
                    
                    if (!finalStageId) {
                        setPreviousIds([])
                        return
                    }

                    logic.retrievePokemonById(finalStageId)
                        .then(pokemon => {
                            const preEvos = pokemon.preEvo || [] 
                            setPreviousIds([finalStageId, ...preEvos])
                        })
                        .catch(error => alert(error))
                })
                .catch(error => alert(error))
        } catch (error) {
            alert(error)
        }
    }, [game, type])

    useEffect(() => {
        try{
            logic.retrieveFinalStagesFromGame(game)
                .then(setAvailableFinalStages)
                .catch(error => alert(error))
        } catch (error) {
            alert(error)
        }
    },[game])

    useEffect(() => {
        setSelectedPreEvos([]);
    }, [activeFinalStage]);

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        if (!activeFinalStage) {
            alert('Please select a Pokémon before submitting')
            return
        }
    
        try {
            const allIds = [...selectedPreEvos, activeFinalStage]
            const idsToDelete = previousIds.filter(id => !allIds.includes(id))
    
            if (idsToDelete.length > 0) {
                await logic.removePokemonUsedIn(idsToDelete, game)
            }
    
            await logic.updateTeam(game, type.toLowerCase(), activeFinalStage)
            await logic.updatePokemonUsedIn(allIds, game)
    
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
                        onClose()}
                    }                        
                    alt='Close'
                    className='close-button'
                />
                <div className='pokemon-picker'>
                    <SelectGrid finalStages={filteredById} setActiveFinalStage={setActiveFinalStage}/>
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