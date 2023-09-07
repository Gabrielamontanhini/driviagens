import { db } from "../database/database.connection.js";

async function insert(firstName, lastName){
    await db.query(`INSERT INTO passengers ("firstName", "lastName")
    VALUES ($1, $2);`, [firstName, lastName])
    
}

async function read(id){
    const result = await db.query(`SELECT * FROM passengers WHERE id=$1;`, [id])
    return result
}

export const passengersRepositories = {insert, read}