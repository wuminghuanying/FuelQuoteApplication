import express from "express";
import cpmRoutes from "./routes/cpmRoutes.js";
const app = express();

app.use(express.json());

app.use("/api", cpmRoutes);


app.listen(5500, () => { });

export default app;