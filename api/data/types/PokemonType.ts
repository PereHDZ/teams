type PokemonType = {
    id: string,
    dexNum: string,
    name: string,
    type: [string],
    availableIn: [string],
    finalStage: boolean,
    preEvo?: [string],
}

export default PokemonType