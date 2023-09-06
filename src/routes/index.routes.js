import { Router } from "express";
import citiesRouter from "./cities.routes.js";
import passengersRoutes from "./passengers.routes.js";
import travelsRoutes from "./travels.routes.js";
import flightsRouter from "./flights.routes.js";

const router = Router()
router.use(citiesRouter)
router.use(passengersRoutes)
router.use(flightsRouter)
router.use(travelsRoutes)

export default router