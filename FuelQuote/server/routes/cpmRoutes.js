import express from "express"
import { createCPM, getCPM, getCPMById} from "../controllers/cpmControllers.js"

const router  = express.Router()

router.post('/create', createCPM)
router.get('/getCPM', getCPM)
router.get('/getCPMById/:id', getCPMById)

export default router