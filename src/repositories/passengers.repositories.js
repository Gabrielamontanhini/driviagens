import { db } from "../database/database.connection.js";

async function insert(firstName, lastName){
    await db.query(`INSERT INTO passengers ("firstName", "lastName")
    VALUES ($1, $2);`, [firstName, lastName])
    
}

export const passengersRepositories = {insert}