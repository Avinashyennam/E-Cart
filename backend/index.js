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
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}_${path.extname(file.originalname)}`)
    }
});

// create a multer instance
const upload = multer({ storage: storage });

// creating api route to upload files
app.use("/images", express.static('upload/images'))
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        img_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})


app.get("/", (req, res) => {
    res.send("hello");
});


// const items = Product.find({});
//     console.log(items);
// add product
app.post("/addProduct", async (req, res) => {

    // for generating default id for product
    const items = await Product.find({});
    let id;
    if (items.length > 0) {
        let product_rev = items.slice(-1);
        let last_product = product_rev[0];
        id = last_product.id + 1;
    } else {
        id = 1;
    }
    // console.log(items);
    const product = {
        id: id,
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

// delete product
app.delete("/removeProduct", async (req,res)=>{
    await Product.findOneAndDelete({ id: req.body.id});
    console.log("removed");
    res.json({
        success: true,
        name: req.body.name
    });
})

// get all products
app.get("/allProducts", async (req, res)=>{
    const products = await Product.find({});
    console.log("All products fetched");
    res.send(products);
})
app.listen(5000, () => console.log(`server is running at port ${port}`));