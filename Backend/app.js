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

// Rutas backend
const yearRoutes = require('./rutas/year');
const carEquipmentRoutes = require('./rutas/car_equipment');
const carGenerationRoutes = require('./rutas/car_generation');
const carMakeRoutes = require('./rutas/car_make');
const carModelRoutes = require('./rutas/car_model');
const carOptionRoutes = require('./rutas/car_option');
const carOptionValueRoutes = require('./rutas/car_option_value');
const carSerieRoutes = require('./rutas/car_serie');
const carSpecificationRoutes = require('./rutas/car_specification');
const carSpecificationValueRoutes = require('./rutas/car_specification_value');
const carTrimRoutes = require('./rutas/car_trim');
const carTypeRoutes = require('./rutas/car_type');

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Backend funcionando correctamente');
});

app.use('/api/year', yearRoutes);
app.use('/api/car_equipment', carEquipmentRoutes);
app.use('/api/car_generation', carGenerationRoutes);
app.use('/api/car_make', carMakeRoutes);
app.use('/api/car_model', carModelRoutes);
app.use('/api/car_option', carOptionRoutes);
app.use('/api/car_option_value', carOptionValueRoutes);
app.use('/api/car_serie', carSerieRoutes);
app.use('/api/car_specification', carSpecificationRoutes);
app.use('/api/car_specification_value', carSpecificationValueRoutes);
app.use('/api/car_trim', carTrimRoutes);
app.use('/api/car_type', carTypeRoutes);

// Iniciar servidor
app.listen(app.get('port'), () => {
    console.log('PUERTO', app.get('port'));
});