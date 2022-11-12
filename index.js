//import packages
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: '*'
}));

app.use(express.json());

require('./routes/converter')(app);

const port = process.env.port || 4000;

const start = async () => {
    app.listen(port, () => {
        console.log(`App running on port ${port} ......`);
    });
};

start();
