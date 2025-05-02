import './SelectGrid.css'

function SelectGrid ({ finalStages }){
    return <>
        {finalStages.map((finalStage) => {
            return (
                <div key={finalStage.id} className="selector-cell">
                    <img 
                        src={`/national/image_${finalStage.id}.jpg`}
                        alt={`Pokémon ${finalStage.name}`} 
                        className='big-sprite'/>
                </div>
            )
        })}
   </>
}

export default SelectGrid