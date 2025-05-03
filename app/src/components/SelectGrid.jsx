import { useState } from 'react'
import './SelectGrid.css'

function SelectGrid ({ finalStages, setActiveFinalStage }){
    const [activeIndex, setActiveIndex] = useState(null)

    function toggleActive(index) {
        setActiveIndex(prev => (prev === index ? null : index))
    }

    function handleFinalStageClick (id) {
        setActiveFinalStage(id)
    }

    return <>
        {finalStages.map((finalStage, index) => {
            const url = finalStage.baseForm ? `/national/image_${finalStage.id}.jpg` : `/variants/${finalStage.form}.png`

            return (
                <div 
                    key={finalStage.id} 
                    className={`selector-cell ${activeIndex === index ? 'active' : ''}`} 
                    onClick={() => {
                        toggleActive(index)

                        activeIndex === index ? handleFinalStageClick(null) : handleFinalStageClick(finalStage.id)
                        }}>
                    <img 
                        src={url}
                        alt={`Pokémon ${finalStage.name}`} 
                        className='big-sprite'/>
                </div>
            )
        })}
   </>
}

export default SelectGrid