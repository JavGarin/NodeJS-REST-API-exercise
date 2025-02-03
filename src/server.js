require('dotenv').config(); // Cargar variables de entorno
const express = require('express');
const routes = require('./routes'); // Importar el enrutador
const app = express();
const PORT = process.env.PORT || 3000;


// middleware para parsear JSON
app.use(express.json());

// usar las rutas
app.use('./api', routes);

// iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});