import express from "express"
import { createFuelPrice, getFuelPrice, getSuggestedPrice } from "../controllers/fuelpriceControllers.js"

const router  = express.Router()

router.post('/fuelprice', createFuelPrice)
router.get('/fuelprice', getFuelPrice)
router.post('/suggestedprice', getSuggestedPrice)

export default router