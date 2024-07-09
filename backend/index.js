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
});

// get newCollections
app.get("/newcollection", async (req, res)=>{
    const products = await Product.find({});
    console.log("new collection fetched");
    const newCollection = products.slice(0).slice(-8);
    res.json(newCollection);
})

//get popular in women collections
app.get("/popularinwomen", async (req, res)=>{
    const products = await Product.find({category : "women"});
    console.log("popular women collections fetched");
    const popular_in_women = products.slice(0,4);
    res.json(popular_in_women);
})

// signup of user
app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;
    const checkUser = await User.findOne({ email: email });
    //console.log(checkUser);
    if (checkUser != null) {
        return res.status(404).json({message: "User already exists"});
    }
    let cart = {};
    for(let i=0; i<10; i++){
        cart[i] = 0;
    }
    const newUser = {
        name: name,
        email: email,
        password: password,
        category: "user",
        cartData: cart
    }
    // it inserts and returns an array containing objects(result)
    const result = await User.insertMany(newUser);
    //console.log(result);
    const token = jwt.sign(
        {
            name: result.name,
            id: result._id
        },
        SECRET_KEY,
        {expiresIn: "1h"}
    );
    return res.status(201).json({
        userId: result[0]._id,
        userEmail: result[0].email,
        token: token,
        ok: true,
        success: true,
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
    console.log(checkUser);
    if (checkUser == null) {
        return res.status(404).json({message: "user not found"});
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

//get all users
app.get("/allusers", async (req, res)=>{
    const users = await User.find({});
    res.json(users);
})

// creating middleware for userId
const fetchUser = async (req, res, next) =>{
    const token = req.header("token");
   // console.log(token);
    if(!token){
        res.status(401).json({"error": "authenticate using valid email and password"});
    }
    else{
        try {
            const data = jwt.verify(token, SECRET_KEY);
            //console.log(data);
            //console.log("data.user ", data.user);
            req.user = data;
            next();
        } catch (error) {
            res.status(401).json({"error": "authenticate using valid email and password"});
        }
    }
}

// creating route for adding products into user cart
app.post("/addtocart", fetchUser, async (req, res)=>{
    //console.log(req.body, req.user.id);
    const userId = req.user.id;
    let userData = await User.findOne({_id: userId});
    //console.log(userData);
    userData.cartData[req.body.itemId]+=1;
    console.log(userData.cartData);
    await User.findOneAndUpdate({_id: userId}, {cartData: userData.cartData});
    res.json({"messgae": "succesfullt added"});
})
app.listen(5000, () => console.log(`server is running at port ${port}`));