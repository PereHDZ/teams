import { useEffect, useState } from "react"
import logic from "../logic"

function PreEvoCheckbox({ id }) {
    const [finalStagePokemon, setFinalStagePokemon] = useState(null)
    const [preEvos, setPreEvos] = useState([])

    useEffect(() => {
        try {
            logic.retrievePokemonById(id)
                .then(setFinalStagePokemon)
                .catch(error => alert(error))
        } catch (error) {
            alert(error)
        }
    }, [id])

    console.log('final stage pokemon: ', finalStagePokemon)

    useEffect(() => {
        if (!finalStagePokemon || !finalStagePokemon.preEvo) return;
    
        const fetchPreEvos = async () => {
            try {
                const promises = finalStagePokemon.preEvo.map(preEvoId =>
                    logic.retrievePokemonById(preEvoId)
                );
    
                const results = await Promise.all(promises);
                setPreEvos(results);
            } catch (error) {
                alert(error);
            }
        };
    
        fetchPreEvos();
    }, [finalStagePokemon]);

    console.log('PreEvos: ', preEvos)

    if (!!finalStagePokemon && finalStagePokemon.preEvo.length > 0){
        return (
            <fieldset>
                <legend>Which pre-stages did you use?</legend>

                {preEvos.map(preEvo => {
                    const url = preEvo.baseForm
                        ? `/national/image_${preEvo.id}.jpg`
                        : `/variants/${preEvo.form}.png`

                    return (
                        <label key={preEvo.id}>
                            <input type="checkbox" value={preEvo.id}/>
                            <img src={url} alt={preEvo.name}/>
                        </label>    
                    )
                })}
            </fieldset>
        )
    }
}

export default PreEvoCheckbox