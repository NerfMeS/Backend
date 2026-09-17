const express = require('express');
const port = 3030;
const app = express();

const {
    getHello, 
    getKonyvek,
} = require("./services/konyv_service");

// req.body miatt
app.use(express.json());

app.get("/hello", getHello);
app.get("/konyvek", getKonyvek);

// paraméterezés --> ugyan az a végpont különböző válaszokat tud adni a paramétertől függően
// egy végpontnak van request ls response objektuma, a parmétereket a requestben találod
// req.params.paraméternev --> req.params.["paraméternev"]
// paraméter megadás express js-ben: "/konyvek/:id" teszt: /konyvek/2

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

