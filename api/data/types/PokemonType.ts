type PokemonType = {
    id: string,
    dexNum: string,
    name: string,
    type: string[],
    availableIn: string[],
    baseForm: boolean,
    form?: string,
    finalStage?: string[],
    preEvo?: string[],
    usedIn?: string[]
}

export default PokemonType