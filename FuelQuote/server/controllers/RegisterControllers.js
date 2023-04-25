import userSchema from "../models/user.js"
import bcrypt from "bcryptjs"

export const createRegister = async (req, res) => {
    try{
        const{ Username, Password} = req.body
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(Password, salt)

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

        //check if Username is already in database
        const users = await userSchema.findOne({ username: Username })
        if (users) {
            return res.status(400).json({ message: "Username already exists" })
        }

        const newUser = new userSchema({
            username: Username,
            password: hashedPassword,
        })

        await newUser.save()
                
        res.status(200).json({ message: "Account created successfully" })
    } catch (error) {
        res.status(400).json({ message: "error" })
    }
}


export const getUsers = async (req, res) => {
    try {
        const users = await userSchema.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const login = async (req, res) => {
    try {
        const { Username, Password } = req.body

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

        const user = await userSchema.findOne({ username: Username })
        if (!user) {
            return res.status(400).json({ message: "Username does not exist" })
        }

        const validPassword = await bcrypt.compare(Password, user.password)
        if (!validPassword) {
            return res.status(400).json({ message: "Incorrect Password" })
        }
        console.log(user.cpm_id);
        
        if(user.cpm_id.length === 0){
            // console.log(user.name);
            return res.status(201).json({ message: "Please fill out profile" })
        }

        return res.status(200).json({ message: "Login successful" })
    } catch (error) {
        res.status(400).json({ message: "error" })
    }
}

