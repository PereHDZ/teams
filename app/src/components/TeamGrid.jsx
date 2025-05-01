import './TeamGrid.css'
import Team from './Team'

function TeamGrid ( { onShowSelector }) {
    const pereGames = ['FRLG', 'HGSS', 'Emerald', 'Platinum', 'BW', 'PLA']
    const leiaGames = ['B2W2', 'XY', 'USUM', 'SwSh', 'SV']

    return <>
        <div className="team-grid">
            <div className='character' style={{backgroundColor: '#025da6'}}>
                <div className='title-div'>
                    <h1>Pere</h1>
                </div>

                <div className='games'>
                    {pereGames.map(game => {
                        return (
                            <div className='game' style={{backgroundColor: '#5996c5'}}>
                                <h2>{game}</h2>
                                <Team game= {game} onSelect={onShowSelector} />
                            </div>
                        )    
                    })}      
                </div>
            </div>   

            <div className='character' style={{backgroundColor: '#ea1a3e'}}>
                <div className='title-div'>
                    <h1>Leia</h1>
                </div>

                <div className='games'>
                    {leiaGames.map(game => {
                        return (
                            <div className='game' style={{backgroundColor: '#f16a81'}}>
                                <h2>{game}</h2>
                                <Team game = {game} onSelect = { onShowSelector } />
                            </div>
                        )    
                    })}      
                </div>
            </div>
        </div>
    </>
}

export default TeamGrid