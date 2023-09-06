import { citiesRepositories } from "../repositories/cities.repositories.js";

function create(name){
    citiesRepositories.insert(name)
}

export const citiesServices = {create}