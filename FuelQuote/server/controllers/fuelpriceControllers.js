import FuelSchema from "../models/fuelquote.js";

export const createFuelPrice = async (req, res) => {
    try{
        const{ gallon_requested, address1, address2, city, state, zipcode, date, suggested_price } = req.body

        console.log(req.body)

        if (typeof gallon_requested !== "number") {
            return res.status(400).json({ message: "Gallons must be a number" })
        }
        
        if (typeof address1 !== "string") {
            return res.status(400).json({ message: "Address 1 must be a string" })
        }
        
        if (address2 !== undefined){
            if (typeof address2 !== "string") {
                return res.status(400).json({ message: "Address 2 must be a string" })
            }
        }

        if (typeof city !== "string") {
            return res.status(400).json({ message: "City must be a string" })
        }
        
        if (typeof state !== "string") {
            return res.status(400).json({ message: "State must be a string" })
        }

        if (typeof zipcode !== "string") {
            return res.status(400).json({ message: "Zipcode must be a string" })
        }
        
        if (typeof date !== "string") {
            return res.status(400).json({ message: "Date must be a string" })
        }

        if (typeof suggested_price !== "number") {
            return res.status(400).json({ message: "Suggested price must be a number" })
        }
        
        //check if missing fields
        if (gallon_requested === "" || address1 === "" || city === "" || state === "" || zipcode === "" || date === "" || suggested_price === "") {
            console.log(gallon_requested, address1, city, state, zipcode, date, suggested_price);
            return res.status(400).json({ message: "Please fill out all fields" })
        }
        
        //check if max length of address1 is less than 100
        if (address1.length > 100) {
            return res.status(400).json({ message: "Address 1 must be less than 100 characters" })
        }
        
        //check if max length of address2 is less than 100
        if (address2 !== undefined){
            if (address2.length > 100) {
                return res.status(400).json({ message: "Address 2 must be less than 100 characters" })
            }
        }
        
        //check if max length of city is less than 100
        if (city.length > 100) {
            return res.status(400).json({ message: "City must be less than 100 characters" })
        }
        
        //check if max length of state is less than 2
        if (state.length > 2) {
            return res.status(400).json({ message: "State must be less than 2 characters" })
        }
        
        //check if max length of zipcode is less than 5 and greater than 9
        if (zipcode.length > 9 || zipcode.length < 5) {
            return res.status(400).json({ message: "Zipcode must be less than 9 characters and greater than 5 characters" })
        }
        
        //check if date is mm/dd/yyyy
        if (date.length !== 10) {
            return res.status(400).json({ message: "Date must be in mm/dd/yyyy format" })
        }
        
        //check if min gallons requested is greater than 0
        if (gallon_requested < 0) {
            return res.status(400).json({ message: "Gallons requested must be greater than 0" })
        }
        
        //check if min suggested price is greater than 0
        if (suggested_price < 0) {
            return res.status(400).json({ message: "Suggested price must be greater than 0" })
        }
       
        const newFuel = new FuelSchema(req.body);
        await newFuel.save();

        console.log(newFuel)
        
        res.status(200).json({ message: "Fuel Price created successfully" })
        
    } catch (error) {
        console.log(error)
        res.status(400).json({ error })
    }
}