import { citiesServices } from "../services/cities.services.js"

function create(req, res){
    const {name} = req.body
    try{
        citiesServices.create(name)
        res.sendStatus(201)
    }catch (err){
        res.status(500).send(err.message)
    }
}

export const citiesControllers = {create}