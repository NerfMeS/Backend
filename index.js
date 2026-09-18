const express = require("express");
const app = express();
const port = 3030;


const {
    getHello,
    getKonyvek,
    getKonyvById,
    createkonyv
} = require("./services/konyv_services");



// req.body miatt
app.use(express.json());

app.get("/hello",getHello);
app.get("/konyvek",getKonyvek);


// paraméterezés --> ugyan az a végpont különböző válaszokat tud adni a paramétertől függően
// egy végpontnak van request ls response objektuma, a parmétereket a requestben találod
// req.params.paraméternev --> req.params.["paraméternev"]
// paraméter megadás express js-ben: "/konyvek/:id" teszt: /konyvek/2

app.get("/konyvek/:id", getKonyvById)


// adatfelvétel
// POST kérés
// req.body --> önmagában a végpont nem tudja mi ez ezért kell.use(express.json())
// app.use(express.json()) --> megmondja hogy a jsonben fogadjuk az adatokat

app.post("/ujkonyv", createkonyv);

app.listen(port, () => {
  console.log(`Server lisetening on ${port}`);
});