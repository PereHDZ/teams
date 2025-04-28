import './App.css'
import Grid from './components/grid'

function App() {
  const kanto = {name: 'Kanto', length:151, color: '#d87d7d'}

  return (
    <>
      <Grid length={kanto.length} color={kanto.color} name={kanto.name}/> 
    </>
  )
}

export default App
