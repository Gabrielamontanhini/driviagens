import { Router } from "express";
import { passengersControllers } from "../controllers/passengers.controllers.js";

const passengersRoutes = Router()

passengersRoutes.post("/passengers", passengersControllers.create)

export default passengersRoutes