import { Router } from "express";
import { citiesControllers } from "../controllers/cities.controllers.js";
import { validateSchema } from "../middlewares/validate.schema.js";
import { citiesSchemas } from "../schemas/cities.schemas.js";

const citiesRouter = Router()

citiesRouter.post("/cities", validateSchema(citiesSchemas),citiesControllers.create)

export default citiesRouter