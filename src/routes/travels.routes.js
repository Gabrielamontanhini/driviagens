import { Router } from "express";
import { travelsControllers } from "../controllers/travels.controllers.js";
import { validateSchema } from "../middlewares/validateschema.middleware.js";
import { travelsSchema } from "../schemas/travels.schemas.js";

const travelsRoutes = Router()

travelsRoutes.post("/travels", validateSchema(travelsSchema),travelsControllers.create)
travelsRoutes.get("/passengers/travels", travelsControllers.read)


export default travelsRoutes