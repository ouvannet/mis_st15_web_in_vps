import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: 'ls-803ba1116ea2fec033d0ab5248145747109fc47a.c72qcqwc80z5.ap-southeast-1.rds.amazonaws.com',
  user: 'dbmasteruser',
  password: ':?>Pi:=tVf:z}CN)J6V19;!RY]!M:$G]',
  database: 'mis_user'
});

export default connection;