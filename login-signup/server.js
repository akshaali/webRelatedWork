const express = require('express');
const app = express();
const router = require('./router');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
port = 3002;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/hisaremployee', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
app.use(express.static(__dirname + '/public'))
app.use(express.static('/home/com122/Desktop/Ludo Game'))
app.use('/', router);
app.listen(port, (req, res) => {
    console.log("connected")
});


