import mongoose from "mongoose"

import PokemonType from "../types/PokemonType"
import pokemon from "../schemas/pokemon"

const { model } = mongoose

const Pokemon = model<PokemonType>('Pokemon', pokemon)

export default Pokemon