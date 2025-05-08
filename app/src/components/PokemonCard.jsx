import { useEffect, useState } from 'react'
import './PokemonCard.css'
import logic from '../logic'

function PokemonCard({ dexNum, onClosePokemonCard }) {
    const [allVariants, setAllVariants] = useState([])
    const [currentVariant, setCurrentVariant] = useState(null)

    useEffect (() => {
        try {
            logic.retrievePokemonByDexNum(dexNum)
                .then(data => {
                    setAllVariants(data)
                    setCurrentVariant(data[0])
                })
        } catch (error) {
            alert(error)
        }
    }, [dexNum])

    const displayName = currentVariant
    ? currentVariant.form || currentVariant.name
    : '';

    const usedVariants = allVariants.filter(v => Array.isArray(v.usedIn) && v.usedIn.length > 0)

    return (
        <div className="fullscreen">
            <div className="card">
                <img 
                    src='\icons\x-circle.svg'
                    alt='Close'
                    className='close-icon'
                    onClick={onClosePokemonCard}
                />

                <div className='variant-selector'>
                    {allVariants.map(variant => {
                        const src = !!variant.baseForm ? `/national/image_${variant.id}.jpg` : `/variants/${variant.form}.png`
                        const isSelected = currentVariant?.id === variant.id

                        return (
                            <img 
                                key={variant.id}
                                src={src}
                                className={isSelected ? 'selected-variant': ''}
                                onClick={()=> setCurrentVariant(variant)} 
                            />
                        )
                    })}
                </div>

                {!!currentVariant && (
                    <>
                        <h2 className='dex-num'>#{currentVariant.dexNum}</h2>

                        <h1 className='variant-name'>{displayName}</h1>

                        <div className='typing'>
                            <h2>Typing: </h2> {
                                currentVariant.type.length < 2
                                ? (
                                    <img 
                                        src={`/type_icons/${currentVariant.type[0]}_icon_Sleep.png`}
                                        alt={displayName}
                                        className='type-img'
                                        id='first'
                                    />
                                    )
                                : (
                                    <>
                                        <img 
                                        src={`/type_icons/${currentVariant.type[0]}_icon_Sleep.png`}
                                        alt={displayName}
                                        className='type-img'
                                        id='first'
                                        />
                                        <img 
                                        src={`/type_icons/${currentVariant.type[1]}_icon_Sleep.png`}
                                        alt={displayName}
                                        className='type-img'
                                        />
                                    </>
                                    )
                            }
                        </div>

                        <div className='used-in-dev'>
                            {usedVariants.length > 0 ? (
                                usedVariants.map(variant => (
                                    <h2 key={variant.id}>
                                        You have used {variant.form || variant.name } in {' '}
                                        {variant.usedIn.length === 1
                                            ? variant.usedIn[0]
                                            : variant.usedIn.slice(0, -1).join(', ') + ' and ' + variant.usedIn.slice(-1)}
                                    </h2>
                                ))
                            ) : (
                                <h2>You have not used { allVariants[0].name } yet</h2>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default PokemonCard