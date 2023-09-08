import { conflictError } from "../errors/conflict.js";
import { notFoundError } from "../errors/notFound.js";
import { citiesRepositories } from "../repositories/cities.repositories.js";
import { flightsRepositories } from "../repositories/flights.repositories.js";

async function create(origin, destination, date) {
    const cityExists = await citiesRepositories.verifyCities(origin, destination)
    if (cityExists.rows.length !== 2 || !cityExists.rows) throw notFoundError(`Origem e/ou destino`) //lança erro caso origem e/ou destino não existam
    if (origin === destination) throw conflictError(origin) //lança erro caso origem e destino sejam iguais
    flightsRepositories.insert(origin, destination, date)
}

async function read(origin, destination, smaller, bigger) {
    const result = await flightsRepositories.select(origin, destination, smaller, bigger)
    return result
}

export const flightsServices = { create, read }