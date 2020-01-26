const express = require ('express');
const morgan = require ('morgan');
const app =express();
const cors = require ('cors');
const {mongoose} = require('./database');

//Configuraciones
app.set('port', process.env.PORT || 3000);


//middleWARES caminos medios
//con express.json puedo entender los que me llegue en formato json 
//con morgan reviso peticiones desde la pagina o cliente por consola
app.use(morgan('dev'));
app.use(express.json());
app.use (cors({origin: 'http://localhost:4200'}))



//Routes rutas
app.use(require('./routes/routes.empleados'));


//Inicializacion del servidor
app.listen(app.get('port'), () =>{
    console.log('Servidor en el puerto '+app.get('port'))
});