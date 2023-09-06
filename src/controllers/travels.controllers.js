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

async function read(req, res){
    try{
        const passengersTravels = await travelsServices.read()
        return res.status(200).send(passengersTravels.rows)
    }
    catch (err){
        res.status(500).send(err.message)
    }
}

export const travelsControllers = {create, read}
