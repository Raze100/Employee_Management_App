const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const port = 8000;

const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://Administrator:Admin1711@cluster0.hph442q.mongodb.net/" , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Connected to MongoDB")
}).catch((error)=>{
    console.log("Error Connecting to MongoDB",error)
})

app.listen(port, ()=>{
    console.log(`Server Started at ${port}`)
})
 
