import app from "../index.js";
import request from "supertest";

describe("Register Tests", () => {

    test("canary test", () => {
        expect(true).toEqual(true);
    })

    describe("validate accout", () => {
    
        test("should check if username is string", async () => {
            const response = await request(app).post("/api/register").send({
                Username: 123,
                Password: "hellowork123",
            })
            expect(response.status).toEqual(400)
            expect(response.body.message).toEqual("Username must be a string")

        })

        test("should check if username is string", async () => {
            const response = await request(app).post("/api/register").send({
                Username: "qwertddasdasd",
                Password: 123,
            })
            expect(response.status).toEqual(400)
            expect(response.body.message).toEqual("Password must be a string")

        })


        test("should return 200 if all fields are valid", async () => {
            const response = await request(app).post("/api/register").send({
                Username: "qwerrtesd",
                Password: "wqeqwdsad",
            })
            //expect(response.status).toEqual(200)
            expect(response.body.message).toEqual("Accout created successfully")
        })


        test("should check if missing fields", async () => {
            const response = await request(app).post("/api/register").send({
                Username: "",
                Password: "",
            })
            expect(response.status).toEqual(400)
            expect(response.body.message).toEqual("Please fill out all fields")

        })
        
    })
})
