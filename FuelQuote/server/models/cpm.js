import mongoose from "mongoose";
const cpmSchema = new mongoose.Schema({
    name: {
        type: String,
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
    // user_id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    // },
})
export default mongoose.model('cpmSchema', cpmSchema)