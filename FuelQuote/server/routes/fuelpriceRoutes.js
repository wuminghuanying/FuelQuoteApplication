import express from "express"
import { createFuelPrice } from "../controllers/fuelpriceControllers.js"

const router  = express.Router()

router.post('/fuelprice', createFuelPrice)

export default router