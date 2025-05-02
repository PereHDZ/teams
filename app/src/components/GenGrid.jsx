import { useEffect, useState } from 'react'
import './GenGrid.css'
import logic from '../logic'

function GenGrid ({end, start, color, name}) {
    const [allBaseForms, setAllBaseForms] = useState([])

    useEffect(() => {
        try {
            logic.retrieveBaseForms()
                .then(setAllBaseForms)
                .catch(error => alert(error))
        } catch (error) {
            alert(error)
        }
    }, [])

    const filteredBaseForms = allBaseForms.filter(baseForm => {
        const numId = Number(baseForm.id)
        return numId >= start && numId <= end
    })

    return <>
        <div className='grid-wrapper'>
            <div className='grid-title' style={{backgroundColor: color}}>
                <h2>{name}</h2>
            </div>

            <div className="grid">
                {filteredBaseForms.map((baseForm) => (
                    <div key={baseForm.id} className='sprite-cell' style={{backgroundColor: color}}>
                        <img
                            src={`/national/image_${baseForm.id}.jpg`}
                            alt={`Pokémon ${baseForm.name}`}
                            className='sprite-img'
                        />
                    </div>
                ))}
            </div>
        </div>
    </>
}

export default GenGrid