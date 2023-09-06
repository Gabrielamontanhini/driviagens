import { flightsRepositories } from "../repositories/flights.repositories.js";

function create(origin, destination, date){
    flightsRepositories.insert(origin, destination, date)
}

async function read(){
    const result = await flightsRepositories.select()
    return result
}

export const flightsServices = {create, read}