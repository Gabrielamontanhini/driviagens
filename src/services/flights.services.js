import { badRequest } from "../errors/badRequest.js";
import { conflictError } from "../errors/conflict.js";
import { notFoundError } from "../errors/notFound.js";
import { unprocessable } from "../errors/unprocessable.js";
import { citiesRepositories } from "../repositories/cities.repositories.js";
import { flightsRepositories } from "../repositories/flights.repositories.js";
import { dateQuerySchema} from "../schemas/flights.schemas.js";

async function create(origin, destination, date) {
    const cityExists = await citiesRepositories.verifyCities(origin, destination)
    if (cityExists.rows.length !== 2 || !cityExists.rows) throw notFoundError(`Origem e/ou destino`) //lança erro caso origem e/ou destino não existam
    if (origin === destination) throw conflictError(origin) //lança erro caso origem e destino sejam iguais
    flightsRepositories.insert(origin, destination, date)
}

async function read(origin, destination, smaller, bigger) {
    if ((smaller && !bigger) || (!smaller && bigger)) throw unprocessable("São necessárias ambas as datas inicial e final")
    if (smaller >= bigger) throw badRequest("A data inicial deve ser menor que a final")
    if (smaller && bigger){
        const data = {
            smaller, bigger
        }
        const validation = dateQuerySchema.validate(data)
        if (validation.error) {
            console.log(validation.error.details)
            throw unprocessable("formato das datas")
        }}
    const result = await flightsRepositories.select(origin, destination, smaller, bigger)
    return result
}

export const flightsServices = { create, read }