import { db } from "../database/database.connection.js";

async function insert(origin, destination, date) {
    await db.query(`INSERT INTO flights (origin, destination, date)
    VALUES ($1, $2, $3);`, [origin, destination, date])
}

async function select(origin, destination, smaller, bigger) {
    const queryParams = []
    let query = `SELECT flights.id,
    origin_city.name AS origin,
    destination_city.name AS destination,
    TO_CHAR(flights.date, 'DD-MM-YYYY') AS date FROM flights
        JOIN cities AS origin_city 
    ON flights.origin = origin_city.id
        JOIN cities AS destination_city
    ON flights.destination = destination_city.id`


    if (origin && destination) {
        queryParams.push(`%${origin}%`)
        queryParams.push(`%${destination}%`)
        query += ` WHERE origin_city.name ILIKE $1
        AND destination_city.name ILIKE $2`

    }
    if (origin && !destination) {
        queryParams.push(`%${origin}%`)
        query += ` WHERE origin_city.name ILIKE $${queryParams.length}`

    }
    if (destination && !origin) {
        queryParams.push(`%${destination}%`)
        query += ` WHERE destination_city.name ILIKE $${queryParams.length}`

    }

    if (smaller && bigger && queryParams.length>1) {
        queryParams.push(`%${smaller}%`)
        queryParams.push(`%${bigger}%`)
        query += ` AND flights.date BETWEEN $${queryParams.length-1} AND $${queryParams.length}`
    }
    else if (smaller && bigger && queryParams.length==0){
        queryParams.push(`%${smaller}%`)
        queryParams.push(`%${bigger}%`)
        query += ` WHERE flights.date BETWEEN $${queryParams.length-1} AND $${queryParams.length}`
    }
    const result = await db.query(query, queryParams)
    console.log(query)
    return result
}

async function verifyFlight(id) {
    const result = await db.query(`SELECT * FROM flights WHERE id=$1;`, [id])
    return result
}


export const flightsRepositories = { insert, select, verifyFlight }