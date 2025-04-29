import {Pokemon} from '../data/models'
import {PokemonType} from '../data/types'

async function retrieveFinalStagesFromGame(game:string) : Promise<PokemonType[]> {
    try {
        const finalStages = await Pokemon.find({ 
            finalStage: { $in: [game] },
            availableIn: { $in: [game] }
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