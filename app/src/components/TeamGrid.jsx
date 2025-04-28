import './TeamGrid.css'
import Team from './Team'

function TeamGrid () {
    return <>
        <div className="team-grid">
            <div className='character' style={{backgroundColor: '#025da6'}}>
                <div className='title-div'>
                    <h1>Pere</h1>
                </div>                
                
                <div className='games'>
                    <div className='game' style={{backgroundColor: '#5996c5'}}>
                        <h2>FRLG</h2>
                        <Team/>
                    </div>

                    
                    <div className='game' style={{backgroundColor: '#5996c5'}}>
                        <h2>HGSS</h2>
                        <Team/>
                    </div>

                    <div className='game' style={{backgroundColor: '#5996c5'}}>
                        <h2>Emerald</h2>
                        <Team/>
                    </div>

                    <div className='game' style={{backgroundColor: '#5996c5'}}>
                        <h2>Platinum</h2>
                        <Team/>
                    </div>

                    <div className='game' style={{backgroundColor: '#5996c5'}}>
                        <h2>BW</h2>
                        <Team/>
                    </div>

                    <div className='game' style={{backgroundColor: '#5996c5'}}>
                        <h2>PLA</h2>
                        <Team/>
                    </div>
                </div>
            </div>

            <div className='character' style={{backgroundColor: '#ea1a3e'}}>
                <div className='title-div'>
                    <h1>Leia</h1>
                </div>  
                
                <div className='games'>
                    <div className='game' style={{backgroundColor: '#f16a81'}}>
                        <h2>B2W2</h2>
                        <Team/>
                    </div>

                    <div className='game' style={{backgroundColor: '#f16a81'}}>
                        <h2>XY</h2>
                        <Team/>
                    </div>

                    <div className='game' style={{backgroundColor: '#f16a81'}}>
                        <h2>USUM</h2>
                        <Team/>
                    </div>

                    <div className='game' style={{backgroundColor: '#f16a81'}}>
                        <h2>SwSh</h2>
                        <Team/>
                    </div>

                    <div className='game' style={{backgroundColor: '#f16a81'}}>
                        <h2>SV</h2>
                        <Team/>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default TeamGrid