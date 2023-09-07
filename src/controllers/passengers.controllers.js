import { passengersServices } from "../services/passengers.services.js"

function create(req, res) {
    const { firstName, lastName } = req.body
    passengersServices.create(firstName, lastName)
    res.sendStatus(201)
}

export const passengersControllers = { create }