import FuelSchema from "../models/fuelquote.js";
import userSchema from "../models/user.js";

export const getFuelHistory = async (req, res) => {
  try {
    const user = await userSchema.findById(req.params.id)
    const fuel = await FuelSchema.find({ _id: { $in: user.fuelquote_id } })

    res.status(200).json(fuel)
  }
  catch (error) {
    res.status(404).json({ message: error.message })
  }
}