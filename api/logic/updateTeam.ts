// import {Pokemon} from '../data/models'
// import {PokemonType} from '../data/types'

// async function updateTeam(game:string) : Promise<void> {
//     try {
//         const pokemon = await Pokemon.findOne({ id }).lean().exec()

//         if (!pokemon) {
//             throw new Error(`Pokémon with id ${id} not found`)
//         }

//         return pokemon as PokemonType
//     } catch (error: any) {
//         throw new Error(error.message)
//     }
// }

// export default retrievePokemonById