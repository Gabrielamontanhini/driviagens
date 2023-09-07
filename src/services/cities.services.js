import { conflictError } from "../errors/conflict.js";
import { citiesRepositories } from "../repositories/cities.repositories.js";

async function create(name){
    const existingCity = await citiesRepositories.select(name)
    if (existingCity) throw conflictError(name)
    return citiesRepositories.insert(name)
}

export const citiesServices = {create}