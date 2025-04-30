function retrieveBaseForms () {
    //validation

    //logic
    return fetch(`${import.meta.env.VITE_API_URL}/pokemons/baseForms`)
    .then (res => {
        if (res.status === 200) return res.json()

        return res.json()
            .then(body => {
                const { error, message } = body

                throw new Error(message)
            } )
    })
}

export default retrieveBaseForms