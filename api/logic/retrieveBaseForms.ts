import {Pokemon} from '../data/models'
import {PokemonType} from '../data/types'

async function retrieveBaseForms() : Promise<PokemonType[]> {
    try {
        const finalStages = await Pokemon.find({ 
            baseForm: true
        }).lean().exec();
        
        return finalStages.map(({ id, dexNum, name, type, availableIn, baseForm, finalStage, preEvo}) => ({
            id,
            dexNum,
            name,
            type,
            availableIn,
            baseForm,
            finalStage,
            preEvo
        }));
    } catch (error: any) {
        throw new Error(error.message)
    }
}
export default retrieveBaseForms