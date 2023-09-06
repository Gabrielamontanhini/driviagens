import { Router } from "express";
import { citiesControllers } from "../controllers/cities.controllers.js";

const citiesRouter = Router()

citiesRouter.post("/cities", citiesControllers.create)

export default citiesRouter