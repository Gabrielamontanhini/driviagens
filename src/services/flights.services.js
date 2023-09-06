import { flightsRepositories } from "../repositories/flights.repositories.js";

function create(origin, destination, date){
    flightsRepositories.insert(origin, destination, date)
}

export const flightsServices = {create}