import './TeamGrid.css'
import Team from './Team'
import { useEffect, useState } from 'react'
import logic from '../logic'

function TeamGrid ( { onShowSelector }) {
    const [allTeams, setAllTeams] = useState([])

    const trainerColors = {
        pere: '#025da6',
        leia: '#ea1a3e'
    }
    const gameColors = {
        pere: '#5996c5',
        leia: '#f16a81'
    }

    useEffect(() => {
        try {
            logic.retrieveTeams()
                .then(setAllTeams)
                .catch(error => alert(error))
        } catch (error) {
            alert(error)
        }
    }, [])

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
                                        <Team team={team} onSelect={onShowSelector} />
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