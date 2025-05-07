import {Pokemon} from '../data/models'
import {PokemonType} from '../data/types'

async function retrieveBaseForms() : Promise<PokemonType[]> {
    try {
        const finalStages = await Pokemon.find({ 
            baseForm: true
        }).lean().exec();
        
        return finalStages.map(({ id, dexNum, name, type, availableIn, baseForm, form, finalStage, preEvo, usedIn }) => ({
            id,
            dexNum,
            name,
            type,
            availableIn,
            baseForm,
            form,
            finalStage,
            preEvo,
            usedIn
        }));
    } catch (error: any) {
        throw new Error(error.message)
    }
}
export default retrieveBaseForms