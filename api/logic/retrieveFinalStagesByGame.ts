import {Pokemon} from '../data/models/index.ts'
import {PokemonType} from '../data/types/index.ts'

async function retrieveFinalStagesFromGame(game:string) : Promise<PokemonType[]> {
    try {
        const finalStages = await Pokemon.find({ 
            finalStage: game,
            availableIn: game
        }).lean().exec();
        
        return finalStages.map(({ id, dexNum, name, type, availableIn, finalStage, preEvo}) => ({
            id,
            dexNum,
            name,
            type,
            availableIn,
            finalStage,
            preEvo
        }));
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export default retrieveFinalStagesFromGame