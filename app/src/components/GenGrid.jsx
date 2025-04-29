import './GenGrid.css'

function GenGrid ({end, start, color, name}) {
    const items = Array.from({ length: end - start + 1 }, (_, index) => start + index)

    return <>
        <div className='grid-wrapper'>
            <div className='grid-title' style={{backgroundColor: color}}>
                <h2>{name}</h2>
            </div>

            <div className="grid">
                {items.map((item) => (
                    <div key={item} className='sprite-cell' style={{backgroundColor: color}}>
                        <img
                            src={`public/national/image_${item}.jpg`}
                            alt={`Pokémon ${item}`}
                            className='sprite-img'
                        />
                    </div>
                ))}
            </div>
        </div>
    </>
}

export default GenGrid