import FuelSchema from "../models/fuelquote.js";
import userSchema from "../models/user.js";
import pricingModule from "../utils/pricingModule.js";

export const createFuelPrice = async (req, res) => {
    try {
        const {
            gallon_requested,
            address1,
            address2,
            city,
            state,
            zipcode,
            date,
            suggested_price,
            total_price,
            user_id,
        } = req.body;

        if (typeof gallon_requested !== "number") {
            return res.status(400).json({ message: "Gallons must be a number" });
        }

        if (typeof address1 !== "string") {
            return res.status(400).json({ message: "Address 1 must be a string" });
        }

        if (address2 !== undefined) {
            if (typeof address2 !== "string") {
                return res.status(400).json({ message: "Address 2 must be a string" });
            }
        }

        if (typeof city !== "string") {
            return res.status(400).json({ message: "City must be a string" });
        }

        if (typeof state !== "string") {
            return res.status(400).json({ message: "State must be a string" });
        }

        if (typeof zipcode !== "number") {
            return res.status(400).json({ message: "Zipcode must be a string" });
        }

        if (typeof date !== "string") {
            return res.status(400).json({ message: "Date must be a string" });
        }

        if (typeof suggested_price !== "number") {
            return res
                .status(400)
                .json({ message: "Suggested price must be a number" });
        }

        if (typeof suggested_price !== "number") {
            return res.status(400).json({ message: "Total price must be a number" });
        }

        if (
            gallon_requested === "" ||
            address1 === "" ||
            city === "" ||
            state === "" ||
            zipcode === "" ||
            date === "" ||
            suggested_price === "" ||
            total_price === ""
        ) {
            console.log(
                gallon_requested,
                address1,
                city,
                state,
                zipcode,
                date,
                suggested_price
            );
            return res.status(400).json({ message: "Please fill out all fields" });
        }

        if (address1.length > 100) {
            return res
                .status(400)
                .json({ message: "Address 1 must be less than 100 characters" });
        }

        if (address2 !== undefined) {
            if (address2.length > 100) {
                return res
                    .status(400)
                    .json({ message: "Address 2 must be less than 100 characters" });
            }
        }

        if (city.length > 100) {
            return res
                .status(400)
                .json({ message: "City must be less than 100 characters" });
        }

        if (state.length > 2) {
            return res
                .status(400)
                .json({ message: "State must be less than 2 characters" });
        }

        if (zipcode.length > 9 || zipcode.length < 5) {
            return res
                .status(400)
                .json({
                    message:
                        "Zipcode must be less than 9 characters and greater than 5 characters",
                });
        }

        if (date.length !== 10) {
            return res
                .status(400)
                .json({ message: "Date must be in mm/dd/yyyy format" });
        }

        if (gallon_requested < 0) {
            return res
                .status(400)
                .json({ message: "Gallons requested must be greater than 0" });
        }

        if (suggested_price < 0) {
            return res
                .status(400)
                .json({ message: "Suggested price must be greater than 0" });
        }

        if (total_price < 0) {
            return res
                .status(400)
                .json({ message: "Suggested price must be greater than 0" });
        }

        delete req.body.user_id;

        const newFuel = new FuelSchema(req.body);
        await newFuel.save();

        const user = await userSchema.findOne({ _id: user_id });

        await user.updateOne({ $push: { fuelquote_id: newFuel._id } });

        res.status(200).json({ message: "Fuel Price created successfully" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error });
    }
};

export const getFuelPrice = async (req, res) => {
    try {
        const fuelPrice = await FuelSchema.find();
        res.status(200).json(fuelPrice);
    } catch (error) {
        res.status(404).json({ error });
    }
};

export const getFuelPriceById = async (req, res) => {
    try {
        const fuelPrice = await FuelSchema.findById(req.params.id);
        res.status(200).json(fuelPrice);
    } catch (error) {
        res.status(404).json({ error });
    }
};

export const getSuggestedPrice = async (req, res) => {
    try {
        const { gallon_requested, state, user_id } = req.body;

        const user = await userSchema.findOne({ _id: user_id });
        if (user === null) {
            return res.status(400).json({ message: "User does not exist" });
        }

        const history = user.fuelquote_id.length === 0 ? false : true;

        var { suggestedPrice, totalAmountDue } = pricingModule(
            gallon_requested,
            state,
            history
        );

        suggestedPrice = Math.round(suggestedPrice * 100) / 100;
        totalAmountDue = Math.round(totalAmountDue * 100) / 100;

        res.status(200).json({ suggestedPrice, totalAmountDue });
    } catch (error) {
        res.status(404).json({ error });
    }
};
