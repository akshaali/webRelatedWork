const express = require('express');
const router = express.Router();
const api = require('./api')

router.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/firstpage.html");
    console.log(__dirname);
});

router.get('/sign-up', (req, res) => {
    res.sendFile(__dirname + "/public/sign-up.html");
});

router.get('/login', (req, res) => {
    res.sendFile(__dirname + "/public/login");
});


router.post('/sign-up/user', async (req, res) => {
    //res.send("Your data is submited")
    //console.log(req.body);

    try {
        let user = await api.findByEmail(req.body.email);
        if (user)
            res.send("user exists....")
        else {
            await api.createDb(req.body);
            res.send("user submitted...")
        }

    } catch (err) {
        console.log(err)
    }


})


router.post('/login/user', async (req, res) => {
    //res.send("Your data is submited")
    //console.log(req.body);

    try {
        let user = await api.logIn(req.body.email, req.body.psw);
        if (user)
            res.sendFile("/home/com122/Desktop/Ludo Game/ludo.html")
            
        else {
            res.send("Wrong email-id or password !!")
            //res.sendFile("/home/com122/Desktop/Ludo Game/ludo.html")
            
        }

    } catch (err) {
        console.log(err)
    }


})



module.exports = router;