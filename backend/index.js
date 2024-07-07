const port = 5000;
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const { Product, User } = require("./db");
const SECRET_KEY = "qwertyuioplkjhg"

const corsOption = {
    origin: "http://localhost:5173",
    methods: "GET, PUT, POST, DELETE, HEAD, PATCH",
    credentials: true
}
app.use(cors(corsOption));
app.use(express.json());
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
app.delete("/removeProduct", async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log("removed");
    res.json({
        success: true,
        name: req.body.name
    });
})

// get all products
app.get("/allProducts", async (req, res) => {
    const products = await Product.find({});
    console.log("All products fetched");
    res.json(products);
})

// signup of user
app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;
    const checkUser = await User.findOne({ email: email });
    console.log(checkUser);
    if (checkUser != null) {
        return res.status(404).send("User already exists");
    }
    const newUser = {
        name: name,
        email: email,
        password: password,
        category: "user",
    }
    const result = await User.insertMany(newUser);
    return res.status(201).json({
        user: result
    });
})

// creating login of user
app.post("/login", async (req, res) => {
    const { email, password, category } = req.body;
    const checkUser = await User.findOne({
        $and: [
            { email: email },
            { password: password },
            { category: category }
        ]
    });
    //console.log(checkUser);
    if (checkUser == null) {
        return res.status(404).send("User not found");
    }
    const token = jwt.sign(
        {
            name: checkUser.name,
            id: checkUser._id
        },
        SECRET_KEY,
        {expiresIn: "1h"}
    );
    return res.status(200).json({
        userId: checkUser._id,
        userEmail: checkUser.email,
        token: token,
        //user: checkUser,
        ok: true,
        success: true,

    });
})

//login for admin
app.post("/admin", async (req, res) => {
    const { name, email, password } = req.body;
    const checkUser = await User.findOne({ email: email });
    console.log(checkUser);
    if (checkUser != null) {
        return res.status(404).send("User already exists");
    }
    const newUser = {
        name: name,
        email: email,
        password: password,
        category: "user",
    }
    const result = await User.insertMany(newUser);
    return res.status(201).json({
        user: result
    });
})

app.listen(5000, () => console.log(`server is running at port ${port}`));