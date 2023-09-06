import { Router } from "express";

const travelsRoutes = Router()

travelsRoutes.post("/travels")
travelsRoutes.get("/passenger/travels")


export default travelsRoutes