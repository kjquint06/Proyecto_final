const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql2');
const myConnection = require('express-myconnection');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Configuración
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '@DiegoBonilla',
    database: 'car',
    port: 3306
}, 'single'));

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Backend funcionando correctamente');
});

// Iniciar servidor
app.listen(app.get('port'), () => {
    console.log('PUERTO', app.get('port'));
});