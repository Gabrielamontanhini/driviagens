import { travelsServices } from "../services/travels.services.js";

function create(req, res){
    const {passengerId, flightId} = req.body
    try{
        travelsServices.create(passengerId, flightId)
        res.sendStatus(201)
    }catch (err){
        res.status(500).send(err.message)
    }
}

export const travelsControllers = {create}
