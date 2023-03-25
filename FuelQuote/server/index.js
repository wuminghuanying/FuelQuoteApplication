import express from "express";
import cpmRoutes from "./routes/cpmRoutes.js";
import fuelpriceRoutes from "./routes/fuelpriceRoutes.js";
import RegisterRoutes from "./routes/RegisterRoutes.js";
import dotenv from 'dotenv'

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api", cpmRoutes);
app.use("/api", fuelpriceRoutes);
app.use("/api", RegisterRoutes);


if (process.env.NODE_ENV !== "test") {
    app.listen(process.env.PORT || 5500);
}
export default app;