import express from "express"
import { createCPM } from "../controllers/cpmControllers.js"

const router  = express.Router()

router.post('/create', createCPM)

export default router