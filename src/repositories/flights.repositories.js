import { db } from "../database/database.connection.js";

async function insert(origin, destination, date){
    await db.query(`INSERT INTO flights (origin, destination, date)
    VALUES ($1, $2, $3);`, [origin, destination, date])
}

async function select(origin, destination){
    const queryParams = []
    let query = `SELECT flights.id,
    origin_city.name AS origin,
    destination_city.name AS destination,
    TO_CHAR(flights.date, 'DD-MM-YYYY') AS date FROM flights
        JOIN cities AS origin_city 
    ON flights.origin = origin_city.id
        JOIN cities AS destination_city
    ON flights.destination = destination_city.id`


    if (origin && destination){
        query += ` WHERE origin_city.name ILIKE $1
        AND destination_city.name ILIKE $2;`
       queryParams.push(`%${origin}%`)
       queryParams.push(`%${destination}%`)
    }
    if (origin && !destination) {
        query += ` WHERE origin_city.name ILIKE $1;`
        queryParams.push(`%${origin}%`)
    }
    if (destination && !origin){
        query += ` WHERE destination_city.name ILIKE $1;`
        queryParams.push(`%${destination}%`)
    }

    const result = await db.query(query, queryParams)
        return result
}

async function verifyFlight(id){
    const result = await db.query(`SELECT * FROM flights WHERE id=$1;`, [id])
    return result
}


export const flightsRepositories = {insert, select, verifyFlight}