import { Pool } from 'pg'
import Promise from 'bluebird'

const pool = new Pool({
  user: 'postgres',
  password: '123123',
  host: 'localhost',
  port: 32769,
  database: 'postgres',
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
