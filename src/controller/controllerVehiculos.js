const Vehiculo  = require("../models/Vehiculos");


//insert
const vehiculoSave = async (req, res) =>  {
    try {
        const vehiculo = new Vehiculo(req.body); 
        await vehiculo.save(); 
        res.send("Vehiculo guardado correctamente"); 
    } catch (error) {
        console.error(error); 
    }
}

//listar

const vehiculoList = async (req, res) => {
    try {
        const listVehiculos = await Vehiculo.find();
        res.status(200).send(listVehiculos);
    } catch (error) {
        console.error(error);
    }
};

// find bt id

const vehiculoXId = async (req, res) => {
    try {
        const id = req.params.id;
        if (id) {
            const vehiculo = await Vehiculo.findById(id);
            res.status(200).send(vehiculo);
        }else {
            res.send("No se puede tramitar la petición")
        }    
    } catch (error) {
        console.error(error);
    }
};

module.exports = {
    vehiculoSave,
    vehiculoList,
    vehiculoXId
};