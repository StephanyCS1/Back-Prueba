const app = require('./app');
var port = 4000;
const mongo = require('./database');
const rutasVehiculos = require('./src/Routers/Vehiculos.routes');

app.listen(port, ( ) => {
    console.log('Servidor activo en el puerto: ' + port);
});

app.get("/", (req, res) => {
    res.send("API activa");
});

app.use("/vehiculos", rutasVehiculos);