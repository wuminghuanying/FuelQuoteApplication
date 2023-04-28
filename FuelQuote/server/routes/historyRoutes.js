import express from "express"
const router  = express.Router()
import { getFuelHistory } from "../controllers/historyControllers.js"

router.get('/history/:id', getFuelHistory)

export default router