import mongoose from "mongoose"
const Schema = mongoose.Schema

export const MissionSchema = new Schema({

    codename: { type: String, required: true, },
    objective: { type: String, required: true },
    year: { type: String, required: true },
    completed: { type: Boolean, required: true, default: false },
    locationId: { type: Schema.Types.ObjectId, ref: 'Location' },
    ratId: { type: Schema.Types.ObjectId, ref: 'Rat' }
}, { toJSON: { virtuals: true } })

MissionSchema.virtual('location', {
    localField: 'locationId',
    ref: 'Location',
    foreignField: '_id',
    justOne: true
})

MissionSchema.virtual('rat', {
    localField: 'ratId',
    ref: 'Rat',
    foreignField: '_id',
    justOne: true
})
