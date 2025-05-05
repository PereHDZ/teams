import {Team} from '../data/models'
import { TeamType } from '../data/types'

async function retrieveTeamByGame(game:string) : Promise<TeamType> {
    try {
        console.log('retrieveTeamByGame game: ', game)
        const team = await Team.findOne({ game }).lean().exec()

        if (!team) {
            throw new Error(`Team for game ${game} not found`)
        }

        return team as TeamType
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export default retrieveTeamByGame