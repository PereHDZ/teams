import { Team } from "../data/models";
import { TeamType } from "../data/types";

async function retrieveTeams() : Promise<TeamType[]> {
    try {
        const teams = await Team.find().lean().exec();
        
        return teams.map(({ trainer, game, grass, fire, water, electric, flying, ground, misc }) => ({
            trainer,
            game,
            grass,
            fire,
            water,
            electric,
            flying,
            ground,
            misc
        }));
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export default retrieveTeams