import express from "express"
const router  = express.Router()
let FuelSchema = require('../models/fuelquote');


router.route('/').get((req, res) => {
  FuelSchema.find()
    .then(fuels => res.json(fuels))
    .catch(err => res.status(400).json('Error: ' + err));
});

export default router