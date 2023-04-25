import mongoose from "mongoose";    
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type:String,
        required: true,
    },
    cpm_id: {
        type: [mongoose.Schema.Types.ObjectId],
    },
});

export default mongoose.model('userSchema', userSchema)
