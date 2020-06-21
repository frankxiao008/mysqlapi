const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/', async (req, res, next)=>{
    try{
        let results = await db.all();
        res.json(results);

    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/:id', async (req, res, next)=>{
    try{
        let results = await db.one(req.params.id);
        // res.json({"name": "abc"});
        res.json(results);

    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/addUser', async (req, res, next)=>{
    try{
        console.log("the add user is called");
        // console.log(req.body);
        // var params = req.body;
        let results = await db.addUser(params.username, req.params.password, req.params.email);
        res.json(results);
        res.json({"name": "abc"});
        res.sendStatus(200);
        // let results = await db.one(req.params.id);
        // // res.json({"name": "abc"});
        // res.json(results);


    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;