import express from "express"
import { createRegister } from "../controllers/RegisterControllers.js"

const router  = express.Router()

router.post('/register', createRegister)

export default router