import mongoose from "mongoose"

import { Pokemon } from "../../models"

import allPokemon from '.'

mongoose.connect('mongodb://localhost:27017/teams')
    .then(() => Pokemon.deleteMany())
    .then(() => Pokemon.insertMany(allPokemon))
    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error)