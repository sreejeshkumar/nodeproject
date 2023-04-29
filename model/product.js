const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0.0
    },
    images: [
        {
            image: {
                type: String,
                default: ''
            }
        }]


})

module.exports = mongoose.model("Product", productSchema)