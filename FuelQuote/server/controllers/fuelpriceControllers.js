export const createFuelPrice = async (req, res) => {
    try{
        const{ gallon_requested, address1, address2, city, state, zipcode, date, suggested_price } = req.body

        //check if name is a string
        if (typeof gallon_requested !== "string") {
            return res.status(400).json({ message: "Gallon must be a string" })
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

        //check if suggested price is a string
        if (typeof suggested_price !== "string") {
            return res.status(400).json({ message: "Suggested price must be a string" })
        }
        
        //check if missing fields
        if (gallon_requested === "" || address1 === "" || city === "" || state === "" || zipcode === "" || date === "" || suggested_price === "") {
            return res.status(400).json({ message: "Please fill out all fields" })
        }
        
        //check if max length of name is less than 50
        if (gallon_requested.length > 50) {
            return res.status(400).json({ message: "Gallons must be less than 50 characters" })
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

        //check if max length of suggested price is less then 50
        if (suggested_price.length > 50) {
            return res.status(400).json({ message: "Suggested price must be less than 50 characters" })
        }
                
        res.status(200).json({ message: "Fuel Price created successfully" })
    } catch (error) {
        res.status(400).json({ error })
    }
}

