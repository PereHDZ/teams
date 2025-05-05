import mongoose from 'mongoose'

const { Schema } = mongoose

const team = new Schema ({
    trainer: {
        type: String,
        required: true
    },
    game: {
        type: String,
        required: true
    },
    grass: {
        type: String,
        required: false
    },
    fire: {
        type: String,
        required: false
    },
    water: {
        type: String,
        required: false
    },
    electric: {
        type: String,
        required: false
    },
    flying: {
        type: String,
        required: false
    },
    ground: {
        type: String,
        required: false
    },
    misc: {
        type: String,
        required: false
    }
})

export default team