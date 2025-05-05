async function updateTeam (game, type, pokemonId) {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/teams/${game}` , {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ type, pokemonId })
    })

    if (!res.ok) throw new Error('Failed to update team member')
}

export default updateTeam