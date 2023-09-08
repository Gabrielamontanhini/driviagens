import { db } from "../database/database.connection.js";

async function insert(firstName, lastName){
    await db.query(`INSERT INTO passengers ("firstName", "lastName")
    VALUES ($1, $2);`, [firstName, lastName])
    
}

async function read(id){
    const result = await db.query(`SELECT * FROM passengers WHERE id=$1;`, [id])
    return result
}

async function readPassengers(nome){
    const queryParams = []
    let query = `SELECT * FROM passengers`;
    if (nome) {
        query += ` WHERE passengers."firstName" ILIKE $1 OR passengers."lastName" ILIKE $2;`
        queryParams.push(`%${nome}%`)
        queryParams.push(`%${nome}%`)
    }
    const result = await db.query(query, queryParams)
    console.log(query)
    return result
}
export const passengersRepositories = {insert, read, readPassengers}