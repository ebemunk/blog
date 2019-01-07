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
