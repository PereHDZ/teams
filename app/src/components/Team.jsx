import './Team.css'

function Team ({ team, onSelect }) {
    function handleTeamMemberSelect(type) {
        onSelect(type, team.game)
    }

    const types = ['grass', 'fire', 'water', 'electric', 'flying', 'ground', 'misc']

    return <>
        {!!team && 
            <div className='teams'>
            {types.map(type => {
                const url = !!team[type]
                    ? 'ay'
                    : `/type_icons/${type.charAt(0).toUpperCase() + type.slice(1)}_icon_Sleep.png`
                return (
                    <button className='team-button' onClick={() => handleTeamMemberSelect(type.charAt(0).toUpperCase() + type.slice(1))}>
                        <img src={url} alt={`${type} Type`} className='team-img'/>
                        <span className='tooltip'>{`Select a ${type} Type`}</span>
                    </button>
                )
            })}
        </div>
        }
    </>
}

export default Team