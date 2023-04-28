import cpmSchema from "../models/cpm.js";
import userSchema from "../models/user.js";

export const createCPM = async (req, res) => {
    try {
        const { name, address1, address2, city, state, zipcode, user_id } =
            req.body;

        if (typeof name !== "string") {
            return res.status(400).json({ message: "Name must be a string" });
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

        if (
            name === "" ||
            address1 === "" ||
            city === "" ||
            state === "" ||
            zipcode === ""
        ) {
            return res.status(400).json({ message: "Please fill out all fields" });
        }

        if (name.length > 50) {
            return res
                .status(400)
                .json({ message: "Name must be less than 50 characters" });
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

        delete req.body.user_id;

        const newCpm = new cpmSchema(req.body);
        await newCpm.save();

        const user = await userSchema.findOne({ _id: user_id });

        await user.updateOne({ $set: { cpm_id: newCpm._id } });

        res.status(200).json({
            address1: newCpm.address1,
            address2: newCpm.address2,
            city: newCpm.city,
            state: newCpm.state,
            zipcode: newCpm.zipcode,
            user_id: newCpm.user_id,
            _id: newCpm._id,
            userId: user._id,
        });
    } catch (error) {
        res.status(400).json({ error });
    }
};

export const getCPM = async (req, res) => {
    try {
        const cpm = await cpmSchema.find();
        res.status(200).json(cpm);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getCPMById = async (req, res) => {
    try {
        const cpm = await cpmSchema.findOne({ _id: req.params.id });
        res.status(200).json(cpm);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
