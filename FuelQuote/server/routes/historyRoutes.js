import express from "express"
const router  = express.Router()
let FuelSchema = require('../models/fuelquote');


router.get('/', async(req, res) => {
  
  FuelSchema.find(customer_id)
    .then(fuels => res.json(fuels))
    .catch(err => res.status(400).json('Error: ' + err));
});

export default router