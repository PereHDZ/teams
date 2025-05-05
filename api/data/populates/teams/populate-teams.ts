import mongoose from "mongoose"

import { Team } from "../../models"

import { pereTeams } from "./pereTeam"
import { leiaTeams } from "./leiaTeams"

const allTeams = [...pereTeams, ...leiaTeams]

mongoose.connect('mongodb://localhost:27017/teams')
    .then(() => Team.deleteMany())
    .then(() => Team.insertMany(allTeams))
    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error)