import { flightsServices } from "../services/flights.services.js"

async function create(req, res) {
    const { origin, destination, date } = req.body
    await flightsServices.create(origin, destination, date)
    return res.sendStatus(201)
}

async function read(req, res) {
    try {
        const allFlights = await flightsServices.read()
        return res.status(200).send(allFlights.rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export const flightsControllers = { create, read }