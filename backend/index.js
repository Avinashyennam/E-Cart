const port = 4000;
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());


app.get("/",(req, res)=>{
    res.send("hello");
});

app.listen(5000,()=> console.log(`server is running at port ${port}`));