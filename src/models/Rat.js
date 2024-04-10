import mongoose from "mongoose"
const Schema = mongoose.Schema


export const RatSchema = new Schema({

    name: { type: String, required: true, minLength: 2, maxLength: 25 },
    callsign: { type: String, required: true, minLength: 2, maxLength: 25 },
    picture: { type: String, required: true, minLength: 1, maxLength: 500 },
    specialties: [{ type: String }]

}, { toJSON: { virtuals: true } })