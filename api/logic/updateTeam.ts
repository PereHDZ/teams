import {Team} from '../data/models'

async function updateTeam(game: string, type: string, id: string) : Promise<void> {
    try {
        await Team.updateOne(
            {game: game},
            { $set: { [type]: id }}
        )
    } catch (error: any) {
        throw new Error(error.message)  
    }
}

export default updateTeam