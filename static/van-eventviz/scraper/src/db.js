import { Pool } from 'pg'
import { config } from 'dotenv'
import Promise from 'bluebird'

config()

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env

const pool = new Pool({
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
  Promise,
})

export function getPool() {
  return pool
}

export function insertObj(obj, table) {
  const cols = Object.keys(obj).join(',')
  const valOrder = Object.keys(obj)
    .map((v, i) => `$${i + 1}`)
    .join(',')
  const sql = `
		INSERT INTO ${table}
		(${cols})
		VALUES
		(${valOrder})
	`
  return [sql, Object.values(obj)]
}
