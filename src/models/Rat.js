import mongoose from "mongoose"
const Schema = mongoose.Schema


export const RatSchema = new Schema({

    name: { Type: String, required: true, minLength: 2, maxLength: 25 },
    callsign: { Type: String, required: true, minLength: 2, maxLength: 25 },
    picture: { Type: String, required: true, minLength: 1, maxLength: 500 },
    specialties: [{ type: String, required: true }]

})