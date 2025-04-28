import './App.css'
import Grid from './components/grid'

function App() {
  const kanto = {name: 'Kanto', start: 1, end:151, color: '#d87d7d'}
  const johto = {name: 'Johto', start: 152, end:251, color: '#f8f67e'}
  const hoenn = {name: 'Hoenn', start: 252, end:386, color: '#5ebf64'}
  const sinnoh = {name: 'Sinnoh', start: 387, end:493, color: '#72a2ce'}
  const unova = {name: 'Unova', start: 494, end:649, color: '#a2aab3'}
  const kalos = {name: 'Kalos', start: 650, end:721, color: '#e7bde2'}
  const alola = {name: 'Alola', start: 722, end:809, color: '#e6b065'}
  const galar = {name: 'Galar', start: 810, end:898, color: '#b588d6'}
  const hisui = {name: 'Hisui', start: 899, end:905, color: '#7c530d'}
  const paldea = {name: 'Paldea', start: 906, end:1025, color: '#7c0d0d'}


  return (
    <>
      <div className='center'>
        <Grid start={kanto.start} end={kanto.end} color={kanto.color} name={kanto.name}/>
        <Grid start={johto.start} end={johto.end} color={johto.color} name={johto.name}/>
        <Grid start={hoenn.start} end={hoenn.end} color={hoenn.color} name={hoenn.name}/>
        <Grid start={sinnoh.start} end={sinnoh.end} color={sinnoh.color} name={sinnoh.name}/>
        <Grid start={unova.start} end={unova.end} color={unova.color} name={unova.name}/>
        <Grid start={kalos.start} end={kalos.end} color={kalos.color} name={kalos.name}/>
        <Grid start={alola.start} end={alola.end} color={alola.color} name={alola.name}/>
        <Grid start={galar.start} end={galar.end} color={galar.color} name={galar.name}/>
        <Grid start={hisui.start} end={hisui.end} color={hisui.color} name={hisui.name}/>
        <Grid start={paldea.start} end={paldea.end} color={paldea.color} name={paldea.name}/>
      </div>      
    </>
  )
}

export default App
