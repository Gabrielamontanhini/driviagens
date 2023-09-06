import { Router } from "express";
import { travelsControllers } from "../controllers/travels.controllers.js";

const travelsRoutes = Router()

travelsRoutes.post("/travels", travelsControllers.create)
travelsRoutes.get("/passenger/travels")


export default travelsRoutes