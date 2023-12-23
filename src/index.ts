// src/index.ts
// import { mongoSeeder } from './seeders/mongoSeeder';
import { sqlSeeder } from './seeders/sql';
import {userProd} from './data/user-prod'

async function main() {
  try {
    // Ejecuta los seeders aquí
    // await mongoSeeder.seed();
    await sqlSeeder(userProd);

    console.log('Seeders ejecutados con éxito.');
  } catch (error) {
    console.error('Error al ejecutar los seeders:', error);
  }
}

main();
