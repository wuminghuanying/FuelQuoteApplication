export const createRegister = async (req, res) => {
    try{
        const{ Username, Password} = req.body

        //check if Username is a string
        if (typeof Username !== "string") {
            return res.status(400).json({ message: "Username must be a string" })
        }

        //check if Password is a string
        if (typeof Password !== "string") {
            return res.status(400).json({ message: "Password must be a string" })
        }

        if (Username === "" || Password === "") {
            return res.status(400).json({ message: "Please fill out all fields" })
        }
                
        res.status(200).json({ message: "Accout created successfully" })
    } catch (error) {
        res.status(400).json({ message: "error" })
    }
}

