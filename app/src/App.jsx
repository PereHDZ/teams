import logic from './logic'

import { useEffect, useState } from 'react'

import './App.css'

import GenGrid from './components/GenGrid'
import TeamGrid from './components/TeamGrid'
import PokemonSelector from './components/PokemonSelector'

function App() {
  const [selectorVisible, setSelectorVisible ] = useState(false)
  const [selectedType, setSelectedType ] = useState(null)
  const [selectedGame, setSelectedGame ] = useState(null)

    
  const regions = [
    newRegion('Kanto', 1, 151, '#d87d7d'),
    newRegion('Johto', 152, 251, '#f2d367'),
    newRegion('Hoenn', 252, 386, '#009551'),
    newRegion('Sinnoh', 387, 493, '#72a2ce'),
    newRegion('Unova', 494, 649, '#a2aab3'),
    newRegion('Kalos', 650, 721, '#e7bde2'),
    newRegion('Alola', 722, 809, '#e6b065'),
    newRegion('Galar', 810, 898, '#b588d6'),
    newRegion('Hisui', 899, 905, '#7c530d'),
    newRegion('Paldea', 906, 1025, '#7c0d0d')
  ]

  function handleShowSelector(type, game) {
    setSelectedType(type)
    setSelectedGame(game)
    setSelectorVisible(true)
  }

  function newRegion (name, start, end, color){
    return {name, start, end, color}  
  }

  function handleCloseSelector () {
    setSelectedType(null)
    setSelectedGame(null)
    setSelectorVisible(false)
  }

  return (
    <>
      {selectorVisible && (
        <PokemonSelector 
          type = {selectedType} 
          game = {selectedGame} 
          onClose = {handleCloseSelector}/>
      )}

      <div className='center'>
        {regions.map(region => {
          return (<GenGrid 
            start={region.start} 
            end={region.end} 
            color={region.color} 
            name={region.name} 
            key={region.name}/>)
        })}

        <TeamGrid onShowSelector = { handleShowSelector }/>
      </div>
    </>
  )
}

export default App
