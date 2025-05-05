import './PreEvoCheckbox.css'

import { useEffect, useState } from "react"
import logic from "../logic"

function PreEvoCheckbox({ id, game, onSelectionChange }) {
    const [finalStagePokemon, setFinalStagePokemon] = useState(null)
    const [preEvos, setPreEvos] = useState([])
    const [selectedIds, setSelectedIds] = useState([])

    useEffect(() => {
        try {
            logic.retrievePokemonById(id)
                .then(setFinalStagePokemon)
                .catch(error => alert(error))
        } catch (error) {
            alert(error)
        }
    }, [id])

    useEffect(() => {
        if (!finalStagePokemon || !finalStagePokemon.preEvo) return;
    
        const fetchPreEvos = async () => {
            try {
                const promises = finalStagePokemon.preEvo.map(preEvoId =>
                    logic.retrievePokemonById(preEvoId)
                );
    
                const results = await Promise.all(promises)
                const filteredPreEvos = results.filter(preEvo => preEvo.availableIn.includes(game))
                setPreEvos(filteredPreEvos)

            } catch (error) {
                alert(error)
            }
        };
    
        fetchPreEvos()
    }, [finalStagePokemon])

    useEffect(() => {
        if (preEvos.length > 0) {
            setSelectedIds(preEvos.map(p => p.id))
        }
    }, [preEvos])

    useEffect(() => {
        onSelectionChange?.(selectedIds)
    }, [selectedIds])

    const handleChange = (e) => {
        const value = e.target.value
        const checked = e.target.checked

        setSelectedIds(prev => 
            checked ? [...prev, value] : prev.filter(id => id !== value)
        )
    }

    if (!!finalStagePokemon && !!preEvos && preEvos.length > 0){
        return (
            <fieldset>
                <legend>Which pre-stages did you use?</legend>

                {preEvos.map(preEvo => {
                    const url = preEvo.baseForm
                        ? `/national/image_${preEvo.id}.jpg`
                        : `/variants/${preEvo.form}.png`

                    return (
                        <label key={preEvo.id}>
                            <input 
                                type="checkbox" 
                                value={preEvo.id}
                                onChange={handleChange}
                                checked={selectedIds.includes(preEvo.id)}
                            />
                            <img src={url} alt={preEvo.name} className='checkbox-img'/>
                        </label>    
                    )
                })}
            </fieldset>
        )
    }
}

export default PreEvoCheckbox