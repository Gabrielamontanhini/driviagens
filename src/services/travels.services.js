import { travelsRepositories } from "../repositories/travels.repositories.js";

function create(passengerId, travelId){
    travelsRepositories.insert(passengerId, travelId)
}

export const travelsServices = {create}