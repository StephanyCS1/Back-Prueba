const mongo = require('mongoose' );

const VehiculoSchema = new mongo.Schema(
    {
        placa:{
            type: String,
            required: true,
            unique: true
        },
        marca:{
            type: String,
            required: true
        },
        modelo: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Vehiculo = new mongo.model("Vehiculo", VehiculoSchema);
module.exports = Vehiculo;