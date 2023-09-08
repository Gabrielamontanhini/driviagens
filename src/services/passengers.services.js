import { passengersRepositories } from "../repositories/passengers.repositories.js";

function create(firstName, lastName){
    passengersRepositories.insert(firstName, lastName)
}

async function read(nome){
    const result = await passengersRepositories.readPassengers(nome)
    return result.rows
}
export const passengersServices = {create, read}