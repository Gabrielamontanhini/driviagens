import { travelsRepositories } from "../repositories/travels.repositories.js";

function create(passengerId, travelId){
    travelsRepositories.insert(passengerId, travelId)
}

async function read(){
    const result = await travelsRepositories.select()
    return result
}

export const travelsServices = {create, read}