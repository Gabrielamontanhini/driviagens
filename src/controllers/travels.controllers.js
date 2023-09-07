import { travelsServices } from "../services/travels.services.js";

async function create(req, res) {
    const { passengerId, flightId } = req.body

    await travelsServices.create(passengerId, flightId)
    res.sendStatus(201)

}

async function read(req, res) {

    const passengersTravels = await travelsServices.read()
    return res.status(200).send(passengersTravels.rows)

}

export const travelsControllers = { create, read }
