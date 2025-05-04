import './Team.css'

function Team ({ game, onSelect }) {
    function handleTeamMemberSelect(type) {
        onSelect(type, game)
    }

    const teamSlots = ['Grass', 'Fire', 'Water', 'Electric', 'Flying', 'Ground']

    return <>
        <div className='teams'>
            {teamSlots.map(slot => {
                return (
                <button className='team-button' onClick={() => handleTeamMemberSelect(slot)}>
                    <img src={`/type_icons/${slot}_icon_Sleep.png`} alt='Grass Type' className='team-img'/>
                    <span className='tooltip'>{`Select a ${slot} Type`}</span>
                </button>
                )
            })}

            <button className='team-button' onClick={() => handleTeamMemberSelect(undefined)}>
                Misc.
                <span className='tooltip'>Select a Miscellaneous Pokémon</span>
            </button>
        </div>
    </>
}

export default Team