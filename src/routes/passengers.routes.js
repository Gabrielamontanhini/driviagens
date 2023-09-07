import { Router } from "express";
import { passengersControllers } from "../controllers/passengers.controllers.js";
import { validateSchema } from "../middlewares/validate.schema.js";
import { passSchemas } from "../schemas/passengers.schemas.js";

const passengersRoutes = Router()

passengersRoutes.post("/passengers",validateSchema(passSchemas),passengersControllers.create)

export default passengersRoutes