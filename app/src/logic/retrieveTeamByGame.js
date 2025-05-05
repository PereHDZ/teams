function retrieveTeamByGame (game) {
    //validation

    //logic
    return fetch(`${import.meta.env.VITE_API_URL}/teams/${game}`)
    .then (res => {
        console.log('retrieveTeamByGame.js game: ', game)
        if (res.status === 200) return res.json()

        return res.json()
            .then(body => {
                const { error, message } = body

                throw new Error(message)
            } )
    })
}

export default retrieveTeamByGame