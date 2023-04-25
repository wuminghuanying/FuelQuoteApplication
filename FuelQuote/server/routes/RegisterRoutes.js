import express from "express"
import { createRegister, getUsers, login } from "../controllers/RegisterControllers.js"

const router  = express.Router()

router.post('/register', createRegister)
router.get('/users', getUsers)
router.post('/login', login)

export default router