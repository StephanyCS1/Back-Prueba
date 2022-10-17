const { Router } = require('express');
const routerVehiculos = Router();
const controlVehiculo = require('../controller/controllerVehiculos');

routerVehiculos.get("/", (req, res) =>{
    res.send("Funciono bien");
});

routerVehiculos.post("/new", controlVehiculo.vehiculoSave);
routerVehiculos.get("/list", controlVehiculo.vehiculoList);
routerVehiculos.get("/find/:id", controlVehiculo.vehiculoXId); 

module.exports = routerVehiculos;
