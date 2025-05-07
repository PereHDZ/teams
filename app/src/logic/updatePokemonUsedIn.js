async function updatePokemonUsedIn(ids, game) {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/pokemon/usedIn`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids, game })
    })

    if (!res.ok) throw new Error('Failed to mark Pokémon as used')
}

export default updatePokemonUsedIn