import './Grid.css'

function Grid ({end, start, color, name}) {
    const items = Array.from({ length: end - start + 1 }, (_, index) => start + index)

    return <>
        <div className='grid-wrapper'>
            <div className='grid-title' style={{backgroundColor: color}}>
                <h2>{name}</h2>
            </div>

            <div className="grid">
                {items.map((item) => (
                    <div key={item} className='sprite-cell' style={{backgroundColor: color}}>
                        {console.log(item)}
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

export default Grid