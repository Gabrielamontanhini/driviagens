import { notFoundError } from "../errors/notFound.js";
import { tooMany } from "../errors/tooMany.js";
import { flightsRepositories } from "../repositories/flights.repositories.js";
import { passengersRepositories } from "../repositories/passengers.repositories.js";
import { travelsRepositories } from "../repositories/travels.repositories.js";

async function create(passengerId, flightId){
    const passengerExists = await passengersRepositories.read(passengerId)
    if (passengerExists.rows.length === 0) throw notFoundError("Passageiro")
    const flightExists = await flightsRepositories.verifyFlight(flightId)
    if (flightExists.rows.length === 0) throw notFoundError("Vôo")
    travelsRepositories.insert(passengerId, flightId)
}

async function read(name){
    const result = await travelsRepositories.select(name)
    if (result.rows.length > 10) throw tooMany()
    return result
}

export const travelsServices = {create, read}