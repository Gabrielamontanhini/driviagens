import { Router } from "express";
import { passengersControllers } from "../controllers/passengers.controllers.js";
import { validateSchema } from "../middlewares/validate.schema.js";
import { passSchema } from "../schemas/passengers.schemas.js";

const passengersRoutes = Router()

passengersRoutes.post("/passengers",validateSchema(passSchema),passengersControllers.create)

export default passengersRoutes