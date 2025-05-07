async function removePokemonUsedIn(ids, game) {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/pokemon/not-used-in`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids, game })
    })

    if (!res.ok) throw new Error('Failed to unmark Pokémon as used')
}

export default removePokemonUsedIn
