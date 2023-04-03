import express from "express";
import cpmRoutes from "./routes/cpmRoutes.js";
import fuelpriceRoutes from "./routes/fuelpriceRoutes.js";
import RegisterRoutes from "./routes/RegisterRoutes.js";
import dotenv from 'dotenv'
import mongoose from 'mongoose'



const connect= async () => {
    try {
        await mongoose.connect(process.env.MONGO);
    } catch (error) {
        throw error
    }
};

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api", cpmRoutes);
app.use("/api", fuelpriceRoutes);
app.use("/api", RegisterRoutes);


if (process.env.NODE_ENV !== "test") {
    app.listen(process.env.PORT || 5500);
    connect()
    console.log("Connected to Server"); 
}
export default app;