import { db } from "../database/database.connection.js";

async function insert(passengerId, flightId) {
    await db.query(`INSERT INTO travels ("passengerId", "flightId")
    VALUES ($1, $2);`, [passengerId, flightId])
}

async function select(name) {
    const queryParams = []
    let query = `SELECT  p."firstName" || ' ' || p."lastName" AS "passenger",
        COUNT(t."passengerId") AS "travels"
        FROM travels AS t
        JOIN passengers AS p ON t."passengerId" = p.id`
    if (name) {
        queryParams.push(`%${name}%`)
        query += ` WHERE p."firstName" || ' ' || p."lastName" ILIKE $1`
    }
    query += ` GROUP BY "passenger"
        ORDER BY "travels" DESC
        LIMIT 10`
    const result = await db.query(query, queryParams)
    return result
}

export const travelsRepositories = { insert, select }