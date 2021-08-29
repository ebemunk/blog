import { Pool } from 'pg'
import Promise from 'bluebird'

import dotenv from 'dotenv'

dotenv.config()

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_DATABASE,
  Promise,
})

export default function getPool() {
  return pool
}

export function insertObj(
  obj: { [key: string]: any },
  table = '"playboy"."playmates"',
) {
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
  return [sql, Object.values(obj)] as const
}
