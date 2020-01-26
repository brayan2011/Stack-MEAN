const mongoose = require('mongoose');

const URI = 'mongodb://localhost/MEAN'; 


mongoose.connect(URI)
    .then(db => console.log ('estoy conectado a la base de datos'))
    .catch(err =>console.error(err));

module.exports = mongoose;