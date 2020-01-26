const mongoose = require('mongoose');
const {Schema} = mongoose;



const esquemaEmpleado = new Schema ({
    nombre : {type : String, require: true},
    cargo : {type : String, require: true},
    oficina: { type : String, require: true },
    salario : {type : Number, require: true}
    })


module.exports = mongoose.model('empleado', esquemaEmpleado);