import { useEffect, useState } from 'react'
import './GenGrid.css'
import logic from '../logic'

function GenGrid({ end, start, color, name, refresh, setPokemonToShow }) {
  const [allBaseForms, setAllBaseForms] = useState([])
  const [usedStatus, setUsedStatus] = useState({})

  useEffect(() => {
    logic.retrieveBaseForms()
      .then(setAllBaseForms)
      .catch(error => alert(error))
  }, [])

  useEffect(() => {
    if (allBaseForms.length === 0) return

    const filtered = allBaseForms.filter(b => {
      const numId = Number(b.id)
      return numId >= start && numId <= end
    })
   
    async function checkUsedFlags() {
      const status = {}
      for (const base of filtered) {
        const variants = await logic.retrievePokemonByDexNum(base.dexNum)
        status[base.dexNum] = variants.some(v => Array.isArray(v.usedIn) && v.usedIn.length > 0)
      }
      setUsedStatus(status)
    }

    checkUsedFlags()
  }, [allBaseForms, start, end, refresh])

  const filteredBaseForms = allBaseForms.filter(baseForm => {
    const numId = Number(baseForm.id)
    return numId >= start && numId <= end
  })

  return (
    <div className='grid-wrapper'>
      <div className='grid-title' style={{ backgroundColor: color }} id={`${name}`}>
        <h2>{name}</h2>
      </div>

      <div className="grid">
        {filteredBaseForms.map((baseForm) => {
          const isUsed = usedStatus[baseForm.dexNum]

          return (
            <div
              key={baseForm.id}
              className={`sprite-cell ${isUsed ? 'used' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => setPokemonToShow(baseForm.dexNum)}
            >
              <span className='tooltip'>{baseForm.name}</span>
              <img
                src={`/national/image_${baseForm.id}.png`}
                alt={`Pokémon ${baseForm.name}`}
                className='sprite-img'
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default GenGrid