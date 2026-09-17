const {
    konyvek
} = require("../database/konyvek_db");

const getHello = (req, res) => {
    res.json({ message: "Könyvek backend" });
};

const getKonyvek = (req, res) => {
    res.json(konyvek);
};

// ID alapú lekérés
const getKonyvById = (req, res) => {
    // req.params.id stringként érkezik, át kell alakítani számmá
    const id = parseInt(req.params.id);

    const talaltKonyv = konyvek.find(k => k.id === id);
    
    res.json(talaltKonyv);
};

module.exports = {
    getHello,
    getKonyvek,
    getKonyvById
};