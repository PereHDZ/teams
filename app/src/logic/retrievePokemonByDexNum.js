function retrievePokemonByDexNum (dexNum) {
    //validation

    //logic
    return fetch(`${import.meta.env.VITE_API_URL}/pokemons/dex/${dexNum}`)
    .then (res => {
        if (res.status === 200) return res.json()

        return res.json()
            .then(body => {
                const { error, message } = body

                throw new Error(message)
            } )
    })
}

export default retrievePokemonByDexNum