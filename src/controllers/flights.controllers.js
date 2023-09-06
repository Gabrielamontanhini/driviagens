import { flightsServices } from "../services/flights.services.js"

function create(req, res){
    const {origin, destination, date} = req.body
    try{
        flightsServices.create(origin, destination, date)
        res.sendStatus(201)
    }catch (err){
        res.status(500).send(err.message)
    }
}

export const flightsControllers = {create}