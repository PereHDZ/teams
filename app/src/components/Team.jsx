import { useEffect, useState } from 'react'
import logic from '../logic'
import './Team.css'

function Team({ team, onSelect }) {
    const [pokemonMap, setPokemonMap] = useState({})

    const types = ['grass', 'fire', 'water', 'electric', 'flying', 'ground', 'misc']

    useEffect(() => {
        if (!team) return

        const fetchPokemon = async () => {
            const updatedMap = {}

            for (const type of types) {
                if (team[type]) {
                    try {
                        const pokemon = await logic.retrievePokemonById(team[type])
                        updatedMap[type] = pokemon
                    } catch (error) {
                        alert(`Failed to fetch Pokémon for ${type}: ${error.message}`)
                    }
                }
            }

            setPokemonMap(updatedMap)
        }

        fetchPokemon()
    }, [team])

    function handleTeamMemberSelect(type) {
        onSelect(type, team.game)
    }

    return (
        <>
            {!!team && (
                <div className="teams">
                    {types.map((type) => {
                        let url = ''

                        if (pokemonMap[type]) {
                            const pokemon = pokemonMap[type]
                            url = pokemon.baseForm
                                ? `/national/image_${pokemon.id}.jpg`
                                : `/variant/${pokemon.form}.png`
                        } else {
                            url = `/type_icons/${type.charAt(0).toUpperCase() + type.slice(1)}_icon_Sleep.png`
                        }

                        return (
                            <button key={type} className="team-button" onClick={() => handleTeamMemberSelect(type.charAt(0).toUpperCase() + type.slice(1))}>
                                <img src={url} alt={`${type} Type`} className="team-img" />
                                <span className="tooltip">{`Select a ${type} Type`}</span>
                            </button>
                        )
                    })}
                </div>
            )}
        </>
    )
}

export default Team
