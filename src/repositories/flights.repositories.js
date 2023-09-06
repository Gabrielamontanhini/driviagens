import { db } from "../database/database.connection.js";

async function insert(origin, destination, date){
    await db.query(`INSERT INTO flights (origin, destination, date)
    VALUES ($1, $2, $3);`, [origin, destination, date])
}

export const flightsRepositories = {insert}