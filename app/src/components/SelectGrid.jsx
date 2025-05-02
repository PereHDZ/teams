import './SelectGrid.css'

function SelectGrid ({ finalStages }){
    return <>
        {finalStages.map((finalStage) => {
            const url = finalStage.baseForm ? `/national/image_${finalStage.id}.jpg` : `/variants/${finalStage.form}.png`

            return (
                <div key={finalStage.id} className="selector-cell">
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