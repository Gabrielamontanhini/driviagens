import { Router } from "express";
import { flightsControllers } from "../controllers/flights.controllers.js";

const flightsRouter = Router()

flightsRouter.post("/flights", flightsControllers.create)
flightsRouter.get("/flights")


export default flightsRouter