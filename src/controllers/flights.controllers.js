import { flightsServices } from "../services/flights.services.js"

async function create(req, res) {
    const { origin, destination, date } = req.body
    await flightsServices.create(origin, destination, date)
    return res.sendStatus(201)
}

async function read(req, res) {
    const {origin, destination, "smaller-date": smaller, "bigger-date": bigger } = req.query
    const allFlights = await flightsServices.read(origin, destination, smaller, bigger)
    return res.status(200).send(allFlights.rows)
}

export const flightsControllers = { create, read }