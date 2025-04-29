import mongoose from "mongoose"

import { Pokemon } from "../../models"

import { pokemon1_25 } from "./pokemon1_25"
import { pokemon26_50 } from "./pokemon26_50"
import { pokemon51_75 } from "./pokemon51_75"
import { pokemon76_100 } from "./pokemon76_100"
import { pokemon101_125 } from "./pokemon101_125"
import { pokemon126_150 } from "./pokemon126_150"
import { pokemon151_175 } from "./pokemon151_175"

const allPokemon = [
    ...pokemon1_25, 
    ...pokemon26_50,
    ...pokemon51_75,
    ...pokemon76_100,
    ...pokemon101_125,
    ...pokemon126_150,
    ...pokemon151_175
]

mongoose.connect('mongodb://localhost:27017/teams')
    .then(() => Pokemon.deleteMany())
    .then(() => Pokemon.insertMany(allPokemon))
    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error)