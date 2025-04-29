import mongoose from 'mongoose'

const { Schema } = mongoose

const pokemon = new Schema ({
    id: {
        type: String,
        required: true
    },
    dexNum: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: [String],
        required: true
    },
    availableIn: {
        type: [String],
        required: true
    },
    finalStage: {
        type: [String],
        required: false
    },
    preEvo: {
        type: [String],
        required: false
    }
})

export default pokemon