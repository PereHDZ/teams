import { Pokemon } from '../data/models'

async function removePokemonUsedIn(ids: string[], game: string): Promise<void> {
    try {
        await Pokemon.updateMany(
            { id: { $in: ids } },
            { $pull: { usedIn: game } }
        )
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export default removePokemonUsedIn