import { db } from "../database/database.connection.js";

async function insert(passengerId, flightId) {
    await db.query(`INSERT INTO travels ("passengerId", "flightId")
    VALUES ($1, $2);`, [passengerId, flightId])
}

async function select() {
    const result = await db.query(`SELECT  p."firstName" || ' ' || p."lastName" AS "passenger",
    COUNT(t."passengerId") AS "travels"
FROM travels AS t
JOIN passengers AS p ON t."passengerId" = p.id
GROUP BY "passenger"
ORDER BY "travels" DESC
LIMIT 10;`)
    return result
}

export const travelsRepositories = { insert, select }