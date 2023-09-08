import { passengersServices } from "../services/passengers.services.js"

function create(req, res) {
    const { firstName, lastName } = req.body
    passengersServices.create(firstName, lastName)
    res.sendStatus(201)
}

async function read(req, res){
    const { nome } = req.query
    const allPassengers = await passengersServices.read(nome)
    res.status(200).send(allPassengers)
}
export const passengersControllers = { create , read}