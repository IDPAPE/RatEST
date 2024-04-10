import mongoose from "mongoose"
const Schema = mongoose.Schema

export const MissionSchema = new Schema({

    codename: { type: String, required: true, },
    objective: { type: String, required: true },
    year: { type: String, required: true },
    isCompleted: { type: Boolean, required: true },
    locationId: { type: Schema.Types.ObjectId, ref: 'Location' },
    ratId: { type: Schema.Types.ObjectId, ref: 'Rat' }
})

MissionSchema.virtual('location', {
    localField: 'locationId',
    ref: 'Location',
    foreignField: '_id',
    justOne: true
})

MissionSchema.virtual('handler', {
    localField: 'handlerId',
    ref: 'Rat',
    foreignField: '_id',
    justOne: true
})
