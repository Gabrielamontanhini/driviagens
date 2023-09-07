
import joiBase from "joi"
import joiDate from "@joi/date"
const joi = joiBase.extend(joiDate)

export const flightsSchemas = joi.object({
    origin: joi.number().integer().positive().required(),
	destination: joi.number().integer().positive().required(),
	date: joi.date().format('DD-MM-YYYY').min('now').required()
})