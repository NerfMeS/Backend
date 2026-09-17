const {
    konyvek
} = require("../database/konyvek_db")

const getHello = (req, res)=>{
    res.json({message: "Könyvek backend"})
}

const getKonyvek = (req, res)=>{
    res.json(konyvek)
}

module.exports = {
    getHello,
    getKonyvek
}