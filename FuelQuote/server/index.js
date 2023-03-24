import express from "express";
import cpmRoutes from "./routes/cpmRoutes.js";
import RegisterRoutes from "./routes/RegisterRoutes.js";
const app = express();

app.use(express.json());

app.use("/api", cpmRoutes);
app.use("/api", RegisterRoutes);


app.listen(6100, () => { });

export default app;