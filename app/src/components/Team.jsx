import './Team.css'

function Team () {

    return <>
        <div className='teams'>
            <button className='team-button'>
                <img src='public\type_icons\Grass_icon_Sleep.png' alt='Grass Type'/>
                <span className='tooltip'>Select a Grass Type</span>
            </button>     

            <button className='team-button'>
                <img src='public\type_icons\Fire_icon_Sleep.png' alt='Fire Type'/>
                <span className='tooltip'>Select a Fire Type</span>
            </button>

            <button className='team-button'>
                <img src='public\type_icons\Water_icon_Sleep.png' alt='Water Type'/>
                <span className='tooltip'>Select a Water Type</span>
            </button>
            
            <button className='team-button'>
                <img src='public\type_icons\Electric_icon_Sleep.png' alt='Electric Type'/>
                <span className='tooltip'>Select an Electric Type</span>
            </button>
            
            <button className='team-button'>
                <img src='public\type_icons\Flying_icon_Sleep.png' alt='Ground Type'/>
                <span className='tooltip'>Select a Flying Type</span>
            </button>
            
            <button className='team-button'>
                <img src='public\type_icons\Ground_icon_Sleep.png' alt='Miscellaneous'/>
                <span className='tooltip'>Select a Ground Type</span>
            </button>
            
            <button className='team-button'>
                Misc.
                <span className='tooltip'>Select a Miscellaneous Pokémon</span>
            </button>
        </div>
    </>
}

export default Team