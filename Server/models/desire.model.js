import mongoose from 'mongoose'

const desireSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    desire: {
        type: String,
        required: true
    },

}, { timestamps: true })

export const Desire = mongoose.model('Desire', desireSchema)