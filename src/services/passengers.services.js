import { passengersRepositories } from "../repositories/passengers.repositories.js";

function create(firstName, lastName){
    passengersRepositories.insert(firstName, lastName)
}

export const passengersServices = {create}