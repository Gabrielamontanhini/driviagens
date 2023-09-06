import { passengersServices } from "../services/passengers.services.js"

function create(req, res){
    const {firstName, lastName} = req.body
    try{
        passengersServices.create(firstName, lastName)
        res.sendStatus(201)

    } catch (err){
        res.status(500).send(err.message)
    }
}

export const passengersControllers = {create}