import logic from './logic'

import { useEffect, useState } from 'react'

import './App.css'

import GenGrid from './components/GenGrid'
import TeamGrid from './components/TeamGrid'

function App() {
  const [available, setAvailable] = useState([])

  function newRegion (name, start, end, color){
    return {name, start, end, color}  
  }

  useEffect(() => {
    logic.retrieveFinalStagesFromGame('FRLG')
      .then(finalStages => {
        console.log('Final Stages: ', finalStages)
        setAvailable(finalStages)
      })
      .catch(error => {
        console.error('Error fetching final stages: ', error)
        alert(error)
      })
  }, [])
  
  const regions = [
    newRegion('Kanto', 1, 151, '#d87d7d'),
    newRegion('Johto', 152, 251, '#f2d367'),
    newRegion('Hoenn', 252, 386, '#009551'),
    newRegion('Sinnoh', 387, 493, '#72a2ce'),
    newRegion('Unova', 493, 649, '#a2aab3'),
    newRegion('Kalos', 650, 721, '#e7bde2'),
    newRegion('Alola', 722, 809, '#e6b065'),
    newRegion('Galar', 810, 898, '#b588d6'),
    newRegion('Hisui', 899, 905, '#7c530d'),
    newRegion('Paldea', 906, 1025, '#7c0d0d')
  ]

  return (
    <>
      <div className='center'>
        {regions.map(region => {
          return (<GenGrid start={region.start} end={region.end} color={region.color} name={region.name} key={region.name}/>)
        })}

        <TeamGrid/>
      </div>     
    </>
  )
}

export default App
