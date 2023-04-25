//gallon_requested, address1, address2, city, state, zipcode, date, suggested_price
import mongoose from "mongoose";
const FuelSchema = new mongoose.Schema({
    gallon_requested: {
        type: Number,
        required: true,
    },
    address1: {
        type: String,
        required: true,
    },
    address2: {
        type: String,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true
    },
    zipcode: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    suggested_price: {
        type: Number,
        required: true,
    },
    
})

export default mongoose.model("FuelSchema", FuelSchema);