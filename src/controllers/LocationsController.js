import { locationsService } from "../services/LocationsService.js";
import { missionsService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";


export class LocationsController extends BaseController {
    constructor() {
        super('api/locations')
        this.router
            .get('', this.getLocations)
            .get('/:locationId/missions', this.getMissionsByLocation)
    }

    async getLocations(request, response, next) {
        try {
            const searchQuery = request.searchQuery
            const locations = await locationsService.getLocations(searchQuery)
            response.send(locations)
        } catch (error) {
            next(error)
        }
    }

    async getMissionsByLocation(request, response, next) {
        try {
            const locationId = request.params.locationId
            const locations = await missionsService.getMissionsByLocation(locationId)
            response.send(locations)
        } catch (error) {
            next(error)
        }
    }
}