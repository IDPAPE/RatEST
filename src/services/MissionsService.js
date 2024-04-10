import { dbContext } from "../db/DbContext.js"

class MissionsService {

    async getAllMissions(searchQuery) {
        const missions = await dbContext.Missions.find(searchQuery).populate('location').populate('rat', '-name -picture')
        return missions
    }

    async getMissionsByRat(ratId) {
        const missions = await dbContext.Missions.find({ ratId: ratId }).populate('location').populate('rat', '-name -picture')
        return missions
    }

    async getMissionsByLocation(locationId) {
        const missions = await dbContext.Missions.find({ locationId: locationId }).populate('location').populate('rat', '-name -picture')
        return missions
    }

    async postMission(missionData) {
        const mission = await dbContext.Missions.create(missionData)
        await mission.populate('location')
        await mission.populate('rat', '-name -picture')
        return mission
    }
}

export const missionsService = new MissionsService()