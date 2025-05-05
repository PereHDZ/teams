import './TeamGrid.css'
import Team from './Team'

function TeamGrid ( { onShowSelector, allTeams }) {
    const trainerColors = {
        pere: '#025da6',
        leia: '#ea1a3e'
    }
    const gameColors = {
        pere: '#5996c5',
        leia: '#f16a81'
    }
    const teamsByTrainer = {}

    allTeams.forEach(team => {
        const trainer = team.trainer.toLowerCase()

        if (!teamsByTrainer[trainer]) {
            teamsByTrainer[trainer] = {
                teams: [],
                color: trainerColors[trainer] || '#ccccc',
                gameColor: gameColors[trainer] || '#ddddd'
            }
        }

        teamsByTrainer[trainer].teams.push(team)
    })

    console.log(allTeams)

    return <>
        <div className='team-grid'>
            {Object.entries(teamsByTrainer).map(([trainerName, trainerData]) => {
                return (
                    <div className='character' style={{ backgroundColor: trainerData.color }} key={trainerName}>
                        <div className='title-div'>
                            <h1>{trainerName.charAt(0).toUpperCase() + trainerName.slice(1)}</h1>
                        </div>

                        <div className='games'>
                            {trainerData.teams.map(team => {
                                return (
                                    <div 
                                        className='game' 
                                        key={team.game}
                                        style={{ backgroundColor: trainerData.gameColor}}>
                                        <h2>{team.game}</h2>
                                        <Team team={team} onSelect={(type, game) => onShowSelector(type, game)} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )   
            })}
        </div>
    </>
}

export default TeamGrid