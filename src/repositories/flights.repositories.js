import { db } from "../database/database.connection.js";

async function insert(origin, destination, date){
    await db.query(`INSERT INTO flights (origin, destination, date)
    VALUES ($1, $2, $3);`, [origin, destination, date])
}

async function select(){
    const result = await db.query(`SELECT flights.id,
        origin_city.name AS origin,
        destination_city.name AS destination,
        TO_CHAR(flights.date, 'DD-MM-YYYY') AS date FROM flights
            JOIN cities AS origin_city 
        ON flights.origin = origin_city.id
            JOIN cities AS destination_city
        ON flights.destination = destination_city.id;`)
        return result
}

export const flightsRepositories = {insert, select}