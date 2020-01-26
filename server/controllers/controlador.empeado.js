const empleado = require('../models/empleados')
const ctrlEmpleado = {};

ctrlEmpleado.enviarEmpleados = async(req ,res) =>{
    const Empleados = await empleado.find(); 
    res.json (Empleados);
    
}

ctrlEmpleado.cearEmpleado = async(req ,res) =>{
    const Empleado = new empleado ({
        nombre : req.body.nombre, 
        cargo : req.body.cargo,
        oficina : req.body.oficina,
        salario : req.body.salario
    });
    await Empleado.save();
    res.json ({
        'status' : 'Empleado creado'
    })
}

ctrlEmpleado.enviarEmpleado = async(req ,res)=> {
    const Empleado = await empleado.findById(req.params.id);
    res.json(Empleado)

};

ctrlEmpleado.editarEmpleado = async(req ,res)=> {
    const {id} = req.params;
    const Empleado = {
        nombre : req.body.nombre, 
        cargo : req.body.cargo,
        oficina : req.body.oficina,
        salario : req.body.salario
    };
    await empleado.findByIdAndUpdate (id , {$set:Empleado}, {new:true})
    res.json('estado:Empleado actualizado');
};

ctrlEmpleado.eliminarEmpleado = async(req ,res)=> {
    await empleado.findByIdAndRemove(req.params.id);
    res.json('empleado eliminado');
};

module.exports = ctrlEmpleado ;