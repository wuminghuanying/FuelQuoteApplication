import express from "express"
import { createCPM, getCPM } from "../controllers/cpmControllers.js"

const router  = express.Router()

router.post('/create', createCPM)
router.get('/getCPM', getCPM)

export default router