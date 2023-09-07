import { citiesServices } from "../services/cities.services.js"

async function create(req, res) {
    const { name } = req.body
    await citiesServices.create(name)
    return res.sendStatus(201)
}

export const citiesControllers = { create }