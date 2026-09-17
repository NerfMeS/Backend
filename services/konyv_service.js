const {
    konyvek
} = require('../database/konyvek_db');


const getHello = () => {
    res.json({ message: "könyvek backend" });
}

module.exports = {
    getHello
};
