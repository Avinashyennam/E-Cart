const port = 5000;
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const Product = require("./db");
app.use(express.json());
app.use(cors());

// setup storage for uploaded files
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}_${path.extname(file.originalname)}`)
    }
});

// create a multer instance
const upload = multer({storage: storage});

// creating api route to upload files
app.use("/images", express.static('upload/images'))
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success: 1,
        img_url : `http://localhost:${port}/images/${req.file.filename}`
    })
})


app.get("/",(req, res)=>{
    res.send("hello");
});

// add product
app.post("/addProduct",async (req, res)=>{
    const product = {
        id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        old_price: req.body.old_price,
        new_price: req.body.new_price,
        category: req.body.category
    };
    console.log(product);
    await Product.insertMany(product);
    res.json({
        success: true,
        name: req.body.name
    })
})
app.listen(5000,()=> console.log(`server is running at port ${port}`));