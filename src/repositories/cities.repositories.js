import { db } from "../database/database.connection.js";

async function insert(name){
    await db.query(`INSERT INTO cities (name)
    VALUES ($1);`, [name])
}

export const citiesRepositories = {insert}