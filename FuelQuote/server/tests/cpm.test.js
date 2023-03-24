import app from "../index.js";
import request from "supertest";

describe("CPM Tests", () => {

    test("canary test", () => {
        expect(true).toEqual(true);
    })

    describe("validate name", () => {
    
        test("should check if name is a string", async () => {
            const response = await request(app).post("/api/create").send({
                name: 123,
                address1: "123 Main St",
                city: "Houston",
                state: "TX",
                zipcode: "77062"
            })
            expect(response.status).toEqual(400)
            expect(response.body.message).toEqual("Name must be a string")

        })

        test("should check if address1 is a string", async () => {
            const response = await request(app).post("/api/create").send({
                name: "ABC",
                address1: 123,
                address2: "Apt 1",
                city: "Houston",
                state: "TX",
                zipcode: "77333"
            })
            expect(response.status).toEqual(400)
            expect(response.body.message).toEqual("Address 1 must be a string")
        })

        test("should check if address2 is a string", async () => {
            const response = await request(app).post("/api/create").send({
                name: "ABC",
                address1: "123 Main St",
                address2: 123,
                city: "Houston",
                state: "TX",
                zipcode: "77333"
            })
            expect(response.status).toEqual(400)
            expect(response.body.message).toEqual("Address 2 must be a string")
        })

        test("should check if city is a string", async () => {
            const response = await request(app).post("/api/create").send({
                name: "ABC",
                address1: "123 Main St",
                city: 123,
                state: "TX",
                zipcode: "77333"
            })
            expect(response.status).toEqual(400)
            expect(response.body.message).toEqual("City must be a string")
        })

        test("should check if state is a string", async () => {
            const response = await request(app).post("/api/create").send({
                name: "ABC",
                address1: "123 Main St",
                city: "Houston",
                state: 123,
                zipcode: "77333"
            })
            expect(response.status).toEqual(400)
            expect(response.body.message).toEqual("State must be a string")
        })

        test("should check if zipcode is a string", async () => {
            const response = await request(app).post("/api/create").send({
                name: "ABC",
                address1: "123 Main St",
                city: "Houston",
                state: "TX",
                zipcode: 123
            })
            expect(response.status).toEqual(400)
            expect(response.body.message).toEqual("Zipcode must be a string")
        })

        test("should check if missing fields", async () => {
            const response = await request(app).post("/api/create").send({
                name: "",
                address1: "",
                city: "",
                state: "",
                zipcode: ""
            })
            expect(response.status).toEqual(400)
            expect(response.body.message).toEqual("Please fill out all fields")
        })

        test("should check if max length of name is less than 50", async () => {
            const response = await request(app).post("/api/create").send({
                name: "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ",
                address1: "123 Main St",
                city: "Houston",
                state: "TX",
                zipcode: "77333"
            })
            expect(response.status).toEqual(400)
            expect(response.body.message).toEqual("Name must be less than 50 characters")
        })

        test("should check if max length of address1 is less than 100", async () => {
            const response = await request(app).post("/api/create").send({
                name: "ABC",
                address1: "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ",
                city: "Houston",
                state: "TX",
                zipcode: "77333"
            })
            expect(response.status).toEqual(400)
            expect(response.body.message).toEqual("Address 1 must be less than 100 characters")
        })

        test("should check if max length of address2 is less than 100", async () => {
            const response = await request(app).post("/api/create").send({
                name: "ABC",
                address1: "123 Main St",
                address2: "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCD",
                city: "Houston",
                state: "TX",
                zipcode: "77333"
            })
            expect(response.status).toEqual(400)
            expect(response.body.message).toEqual("Address 2 must be less than 100 characters")
        })

        test("should check if max length of city is less than 100", async () => {
            const response = await request(app).post("/api/create").send({
                name: "ABC",
                address1: "123 Main St",
                city: "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCD",
                state: "TX",
                zipcode: "77333"
            })
            expect(response.status).toEqual(400)
            expect(response.body.message).toEqual("City must be less than 100 characters")
        })

        test("should check if max length of state is less than 2", async () => {
            const response = await request(app).post("/api/create").send({
                name: "ABC",
                address1: "123 Main St",
                city: "Houston",
                state: "TXTX",
                zipcode: "77333"
            })
            expect(response.status).toEqual(400)
            expect(response.body.message).toEqual("State must be less than 2 characters")
        })

        test("should check if max length of zipcode is less than 9 and greater than 5", async () => {
            const response = await request(app).post("/api/create").send({
                name: "ABC",
                address1: "123 Main St",
                city: "Houston",
                state: "TX",
                zipcode: "123"
            })
            expect(response.status).toEqual(400)
            expect(response.body.message).toEqual("Zipcode must be less than 9 characters and greater than 5 characters")
        })

        test("should return 200 if all fields are valid", async () => {
            const response = await request(app).post("/api/create").send({
                name: "ABC",
                address1: "123 Main St",
                city: "Houston",
                state: "TX",
                zipcode: "77333"
            })
            expect(response.status).toEqual(200)
            expect(response.body.message).toEqual("CPM created successfully")
        })

    })
})
