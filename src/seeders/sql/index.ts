import * as mysql from 'mysql';
import {colors} from "colors.ts";

// Configuración de conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'seed-test',
});

// Función para crear tablas y sembrar datos
export function sqlSeeder(data: Record<string, any>): void {
  connection.connect();

  // Iterar sobre las claves del objeto JSON
  Object.keys(data).forEach((tableName) => {
    const tableData = data[tableName];
    
    // Crear la tabla
    const createTableQuery = `CREATE TABLE IF NOT EXISTS ${tableName} (${Object.keys(tableData[0]).map((key) => `${key} VARCHAR(255)`).join(', ')})`;
    connection.query(createTableQuery, (err, results) => {
      // if (err) throw err;
      // console.log(`Tabla ${tableName} creada con éxito.`);
      try {
        console.log(`Tabla ${tableName} creada con éxito.`.bg_green);
      } catch (error) {
        
      }
    });

    // Insertar datos en la tabla
    const insertDataQuery = `INSERT INTO ${tableName} (${Object.keys(tableData[0]).join(', ')}) VALUES ?`;
    const values = tableData.map((item:any) => Object.values(item));
    connection.query(insertDataQuery, [values], (err, results) => {
      if (err) throw err;
      console.log(`Datos insertados en la tabla ${tableName}.`);
    });
  });

  connection.end();
}
