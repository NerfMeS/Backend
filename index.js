const express = require('express');
const port = 3030;
const app = express();

const {
    getHello, 
    getKonyvek,
    getKonyvById
} = require("./services/konyv_service");


app.use(express.json());

app.get("/hello", getHello);
app.get("/konyvek", getKonyvek);

// paraméterezés --> ugyan az a végpont különböző válaszokat tud adni a paramétertől függően.
// egy végpontnak van request és response objektuma, a paramétereket a requestben találod
// request.params.parameternev --> request.params["parameternev"].
// paraméter megadása express js-ben: "/konyvek/:id" teszt: /konyvek/2.

app.get("/konyvek/:id", getKonyvById);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});