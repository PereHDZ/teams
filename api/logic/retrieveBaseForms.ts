import {Pokemon} from '../data/models'
import {PokemonType} from '../data/types'

async function retrieveBaseForms() : Promise<PokemonType[]> {
    try {
        const finalStages = await Pokemon.find({ 
            id: { $regex: /^[0-9]+$/ }
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
export default retrieveBaseForms