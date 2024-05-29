import mysql from 'mysql2';
export const getDB = () => {
  return mysql.createConnection({
    host: '8.218.173.145',
    user: 'root',
    password: '123456',
    database: 'jbook',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  }).promise()
}