const express = require('express');
const port = 3030;
const app = express();

const {} = require('./services/konyv_service');

// req.body miatt
app.use(express.json());

app.get("/hello", getHello);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

