import cpmSchema from "../models/cpm.js"

export const createCPM = async (req, res) => {
    try{
        const{ name, address1, address2, city, state, zipcode } = req.body

        //check if name is a string
        if (typeof name !== "string") {
            return res.status(400).json({ message: "Name must be a string" })
        }

        //check if address1 is a string
        if (typeof address1 !== "string") {
            return res.status(400).json({ message: "Address 1 must be a string" })
        }

        //check if address2 is a string
        if (address2 !== undefined){
            if (typeof address2 !== "string") {
                return res.status(400).json({ message: "Address 2 must be a string" })
            }
        }

        //check if city is a string
        if (typeof city !== "string") {
            return res.status(400).json({ message: "City must be a string" })
        }

        //check if state is a string
        if (typeof state !== "string") {
            return res.status(400).json({ message: "State must be a string" })
        }

        //check if zipcode is a string
        if (typeof zipcode !== "string") {
            return res.status(400).json({ message: "Zipcode must be a string" })
        }
        
        //check if missing fields
        if (name === "" || address1 === "" || city === "" || state === "" || zipcode === "") {
            return res.status(400).json({ message: "Please fill out all fields" })
        }
        
        //check if max length of name is less than 50
        if (name.length > 50) {
            return res.status(400).json({ message: "Name must be less than 50 characters" })
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
    console.log(req.body)
        const newCpm = new cpmSchema(req.body);
        await newCpm.save();
        console.log(newCpm)        

        res.status(200).json({ message: "CPM created successfully" })
    } catch (error) {
        res.status(400).json({ error })
    }
}

