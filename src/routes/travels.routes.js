import { Router } from "express";
import { travelsControllers } from "../controllers/travels.controllers.js";

const travelsRoutes = Router()

travelsRoutes.post("/travels", travelsControllers.create)
travelsRoutes.get("/passengers/travels", travelsControllers.read)


export default travelsRoutes