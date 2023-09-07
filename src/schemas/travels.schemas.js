import Joi from "joi";

export const travelsSchema = Joi.object({
    passengerId: Joi.number().integer().positive().required(),
    flightId: Joi.number().integer().positive().required()
})