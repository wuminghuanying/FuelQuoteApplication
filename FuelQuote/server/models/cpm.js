//Full_name, address1, address2, city, state, zipcode
import mongoose from "mongoose";
const cpmSchema = new mongoose.Schema({
    name: {
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
    
})