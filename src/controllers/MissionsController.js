import { Auth0Provider } from "@bcwdev/auth0provider";
import { missionsService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";


export class MissionsController extends BaseController {
    constructor() {
        super('api/missions')
        this.router
            .get('', this.getAllMissions)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.postMission)
            .put('/:missionId',)

    }

    async getAllMissions(request, response, next) {
        try {
            const searchQuery = request.searchQuery
            const missions = await missionsService.getAllMissions(searchQuery)
            response.send(missions)
        } catch (error) {
            next(error)
        }
    }

    async postMission(request, response, next) {
        try {
            const missionData = request.body
            const mission = await missionsService.postMission(missionData)
            response.send(mission)
        } catch (error) {
            next.error(error)
        }
    }
}