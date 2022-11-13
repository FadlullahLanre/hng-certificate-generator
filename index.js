const express = require('express');
const cors = require('cors');
const app = express();
const multer  = require('multer');
const upload = multer({ dest: './uploads'})
const certificateRoutes = require ("./routes/converter.js")

app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));

app.use(cors({
    origin: '*'
}));


app.use(express.json());
app.use('/certificate', upload.single('csv'), certificateRoutes) 

const port = 4000
const start = async () => {
    app.listen(port, () => {
        console.log(`App running on port ${port} ......`)
    })
};

start();