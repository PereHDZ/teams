import mongoose from "mongoose"

import { Pokemon } from "../../models"

import { pokemon1_25 } from "./pokemon1_25"
import { pokemon26_50 } from "./pokemon26_50"

const allPokemon = [
    ...pokemon1_25, 
    ...pokemon26_50]

mongoose.connect('mongodb://localhost:27017/teams')
    .then(() => Pokemon.deleteMany())
    .then(() => Pokemon.insertMany(allPokemon))
    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error)