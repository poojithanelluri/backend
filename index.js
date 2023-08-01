const express = require('express');
const bodyParser=require('body-parser');
const mongoose =require('mongoose');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(bodyParser.json());
const PORT = process.env.PORT || 8000;
server.post('/demo',(req,res)=>{
    console.log(req.body)
    res.json(req.body);
})
server.listen(PORT,()=>{
    console.log("server started");
})