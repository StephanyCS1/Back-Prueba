const mongo = require('mongoose');

(async () => {
    try {
        const db = await mongo.connect("mongodb://localhost:27017/dbPrueba1");
        console.log("Conexión exitosa en: " + db.connection.name);
    } catch (error) {
        console.error(error);
    }
})();