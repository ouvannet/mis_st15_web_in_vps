// import connection from '../../lib/db';
import connection from "@/lib/db";

export default async function handler(req, res) {
    const { name, gender } = req.body;
    const [rows] = await connection.query(`INSERT INTO users (name,gender) VALUES  ('${name}','${gender}')`);

    res.status(200).json(rows);
}