const {
    konyvek
} = require("../database/konyvek_db");


const getHello = (req, res) => {
    res.json({message: "Konyvek backend"});
};

const getKonyvek = (req, res) => {
    res.json(konyvek);
}

const getKonyvById = (req, res) => {
    const simaid = Number(req.params.id);
    const konyv = konyvek.find(konyv => konyv.id == simaid);
    res.json(konyv);
  
}

const createkonyv = (req, res) =>{
/*   {
        id: 1,
        title: "A Pál utcai fiúk",
        author: "Molnár Ferenc",
        category: "Ifjúsági",
        year: 1907,
        pages: 208,
        price: 2990,
        views: 850
    },
    */
  // const {id, tittle, author, category, year, pages, price, views} = req.body;
   console.log(req.body)
}

module.exports = {
    getHello,
    getKonyvek,
    getKonyvById,
    createkonyv
};