import { Router } from "express";
import { flightsControllers } from "../controllers/flights.controllers.js";
import { validateSchema } from "../middlewares/validateschema.middleware.js";
import { flightsSchemas } from "../schemas/flights.schemas.js";

const flightsRouter = Router()

flightsRouter.post("/flights", validateSchema(flightsSchemas), flightsControllers.create)
flightsRouter.get("/flights", flightsControllers.read)


export default flightsRouter