import {Pokemon} from '../data/models'
import {PokemonType} from '../data/types'

async function retrievePokemonByDexNum(dexNum:string) : Promise<PokemonType[]> {
    try {
        const pokemon = await Pokemon.find({ dexNum }).lean().exec()

        if (!pokemon) {
            throw new Error(`Pokémon with dex number ${dexNum} not found`)
        }

        return pokemon.map(({ id, dexNum, name, type, availableIn, baseForm, form, finalStage, preEvo, usedIn }) => ({
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

export default retrievePokemonByDexNum