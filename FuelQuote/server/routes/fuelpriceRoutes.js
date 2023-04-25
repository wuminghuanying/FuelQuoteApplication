import express from "express"
import { createFuelPrice, getFuelPrice } from "../controllers/fuelpriceControllers.js"

const router  = express.Router()

router.post('/fuelprice', createFuelPrice)
router.get('/fuelprice', getFuelPrice)

export default router