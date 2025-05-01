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
    baseForm: {
        type: Boolean,
        required: true
    },
    form: {
        type: String,
        required:false
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