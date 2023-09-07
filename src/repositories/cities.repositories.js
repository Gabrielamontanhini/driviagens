import { db } from "../database/database.connection.js";

async function insert(name){
    await db.query(`INSERT INTO cities (name)
    VALUES ($1);`, [name])
}

async function select(name){
    const result = await db.query(`SELECT * FROM cities WHERE name = $1`, [name])
    return result.rows[0]
}

export const citiesRepositories = {insert, select}