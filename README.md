# Seed

El proyecto **Seed** tiene como objetivo facilitar la inserción automática de datos en una base de datos mediante un archivo JSON. Esto puede resultar útil en situaciones en las que se necesite poblar la base de datos con información inicial o de prueba de manera eficiente.

## Funcionamiento

El funcionamiento del proyecto se basa en un script que procesa un archivo JSON y lo utiliza para insertar datos en la base de datos correspondiente. Este proceso de carga automática de datos simplifica la tarea de inicializar o actualizar la base de datos con información específica.

## Dependencias


## Estructura del Proyecto

```plaintext
└── 📁seeding
    └── LICENSE
    └── package.json
    └── README.md
    └── 📁src
        └── 📁data
            └── user-prod.ts
        └── index.ts
        └── 📁seeders
            └── 📁mongo
                └── index.ts
            └── 📁sql
                └── index.ts
    └── tsconfig.json
```

### Descripción de la Estructura

- **`seeding/`**: Directorio principal del proyecto.
  - **`LICENSE`**: Archivo que contiene la licencia del proyecto.
  - **`package.json`**: Archivo de configuración del proyecto que especifica las dependencias y scripts del proyecto.
  - **`README.md`**: Documentación principal del proyecto.
  - **`src/`**: Directorio que contiene el código fuente del proyecto.
    - **`data/`**: Directorio que almacena los archivos de datos utilizados para la carga en la base de datos.
      - **`user-prod.ts`**: Archivo de ejemplo que contiene datos de usuarios en formato TypeScript.
    - **`index.ts`**: Archivo principal que inicia el proceso de carga de datos.
    - **`seeders/`**: Directorio que agrupa los diferentes seeders para distintas bases de datos.
      - **`mongo/`**: Directorio que contiene el seeder específico para MongoDB.
        - **`index.ts`**: Archivo que implementa la lógica de carga de datos en MongoDB.
      - **`sql/`**: Directorio que contiene el seeder específico para bases de datos SQL.
        - **`index.ts`**: Archivo que implementa la lógica de carga de datos en bases de datos SQL.
  - **`tsconfig.json`**: Archivo de configuración de TypeScript que especifica las opciones de compilación.

## Carga de datos

Para cargar datos en la base de datos, utiliza archivos TypeScript en la carpeta `src/data`. A continuación, se muestra el formato que deben seguir estos archivos:

### Formato del Archivo de Datos (data.ts)

```typescript
// src/data/data.ts

export const data = {
  "table1": [
    {
      // Propiedades de la tabla 1
      "column1": "valor1",
      "column2": "valor2",
      // ... otras propiedades
    },
    {
      // Propiedades de la tabla 1
      "column1": "valor3",
      "column2": "valor4",
      // ... otras propiedades
    },
    // ... más registros
  ],
  "table2": [
    {
      // Propiedades de la tabla 2
      "columnA": "valorA",
      "columnB": "valorB",
      // ... otras propiedades
    },
    {
      // Propiedades de la tabla 2
      "columnA": "valorC",
      "columnB": "valorD",
      // ... otras propiedades
    },
    // ... más registros
  ],
  // ... más tablas
};
```

### Explicación del Formato

- `data`: Es un objeto que contiene las tablas como propiedades. Cada tabla es representada por un nombre (por ejemplo, "table1", "table2").
- `table1`, `table2`: Son arreglos que contienen objetos, donde cada objeto representa un registro en la respectiva tabla.
- En cada objeto de la tabla, define las propiedades correspondientes a las columnas de la tabla y asigna los valores respectivos.

### Ejemplo

```typescript
// src/data/user-prod.ts

export const data = {
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "role": "admin",
    },
    {
      "id": 2,
      "name": "Jane Doe",
      "email": "jane@example.com",
      "role": "user",
    },
    // ... más registros de usuarios
  ],
  "products": [
    {
      "id": 101,
      "name": "Product A",
      "price": 29.99,
      "category": "electronics",
    },
    {
      "id": 102,
      "name": "Product B",
      "price": 19.99,
      "category": "clothing",
    },
    // ... más registros de productos
  ],
  // ... más tablas si es necesario
};
```

Con esta estructura, puedes organizar y definir los datos que se cargarán en las respectivas tablas de la base de datos al ejecutar el script principal. Asegúrate de que los nombres de las tablas y las columnas coincidan con la configuración de tu base de datos.


## Configuración

1. **Instalación de Dependencias:**
   - Ejecuta el siguiente comando para instalar las dependencias del proyecto:

     ```bash
     npm install
     ```

2. **Ejecución del Script:**
   - Utiliza el siguiente comando para ejecutar el script principal:

     ```bash
     npm run start
     ```

3. **Configuración Específica:**
   - Ajusta la configuración específica del seeder que desees utilizar en los directorios `seeders/mongo` o `seeders/sql`, según tu base de datos.

4. **Datos de Entrada:**
   - Personaliza el archivo de datos en `src/data` (por ejemplo, `user-prod.ts`) según la estructura y formato de datos que desees cargar en la base de datos.

Con estas configuraciones, estarás listo para ejecutar y personalizar el proyecto **Seed** según tus necesidades específicas de carga automática de datos en bases de datos.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más detalles.