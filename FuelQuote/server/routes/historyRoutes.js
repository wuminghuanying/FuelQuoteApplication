import express from "express"
import { createCPM } from "../controllers/historyControllers.js"
//Gallons Requested, Address 1, Address 2, Country, City, State, Zip code, Date, Suggested price</th>
const router  = express.Router()

router.post('/history', createHistory)
router.route('/:id').get((req, res) => {
    FuelQuote.findById(req.params.id)
      .then(fuelquote => res.json(fuelquote))
      .catch(err => res.status(400).json('Error: ' + err));
  });

export default router