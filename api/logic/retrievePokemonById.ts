import {Pokemon} from '../data/models'
import {PokemonType} from '../data/types'

async function retrievePokemonById(id:string) : Promise<PokemonType> {
    try {
        const pokemon = await Pokemon.findOne({ id }).lean().exec()

        if (!pokemon) {
            throw new Error(`Pokémon wit id ${id} not found`)
        }

        return pokemon as PokemonType
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export default retrievePokemonById