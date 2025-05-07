import { Pokemon } from '../data/models'

async function updatePokemonUsedIn(ids: string[], game: string): Promise<void> {
    try {
        await Pokemon.updateMany(
            {
                id: { $in: ids },
                usedIn: { $ne: game }
            },
            {
                $push: { usedIn: game }
            } 
        )
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export default updatePokemonUsedIn