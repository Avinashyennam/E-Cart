const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://avinashyennam02:3zeZGnl3u5bASVgR@cluster0.esoszpn.mongodb.net/Ecommerce");

const product = new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    old_price: {
        type: Number,
        required: true
    },
    new_price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    available: {
        type: Boolean,
        default: true
    }
});

const Product = new mongoose.model("Products", product);
module.exports = Product;