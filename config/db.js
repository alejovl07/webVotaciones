import mysql from 'mysql2/promise'; // Usamos la versión con promesas
import dotenv from 'dotenv'; // Cargar variables de entorno
dotenv.config(); // cargar variables de entorno desde .env en process.env
//Evita el coste de establecer y cerrar conexiones constantemente, 
// permitiendo que otras consultas se ejecuten mientras una conexión está en uso. 
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true, // Espera si no hay conexiones disponibles
  connectionLimit: 10, // Número máximo de conexiones en el pool
});

export default pool;