import mongoose from "mongoose"

import TeamType from "../types/TeamType"
import team from "../schemas/team"

const { model } = mongoose

const Team = model<TeamType>('Team', team)

export default Team