// import connection from '../../lib/db';
import connection from "../lib/db";

export default async function handler(req, res) {
  const [rows] = await connection.query('SELECT * FROM users');
  res.status(200).json(rows);
}