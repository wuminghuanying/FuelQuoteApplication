import app from "../index.js";
import request from "supertest";

describe("Fuel Quote Tests", () => {

    test("canary test", () => {
        expect(true).toEqual(true);
    })

    test("should check if gallons requested is a number", async () => {
        const response = await request(app).post("/api/fuelprice").send({
            gallon_requested:"23",
            address1:"123 Main St",
            city:"Houston",
            state: "TX",
            zipcode:"77055",
            date:"12/12/2020",
            suggested_price:232
        })
        expect(response.status).toEqual(400)
        expect(response.body.message).toEqual("Gallons must be a number")

    })

    test("should check if address1 is a string", async () => {
        const response = await request(app).post("/api/fuelprice").send({
            gallon_requested:23,
            address1:123,
            city:"Houston",
            state: "TX",
            zipcode:"77055",
            date:"12/12/2020",
            suggested_price:232
        })
        expect(response.status).toEqual(400)
        expect(response.body.message).toEqual("Address 1 must be a string")
    })

    test("should check if address2 is a string", async () => {
        const response = await request(app).post("/api/fuelprice").send({
            gallon_requested:23,
            address1:"123 Main St",
            address2:123,
            city:"Houston",
            state: "TX",
            zipcode:"77055",
            date:"12/12/2020",
            suggested_price:232
        })
        expect(response.status).toEqual(400)
        expect(response.body.message).toEqual("Address 2 must be a string")
    })

    test("should check if city is a string", async () => {
        const response = await request(app).post("/api/fuelprice").send({
            gallon_requested:23,
            address1:"123 Main St",
            city:123,
            state: "TX",
            zipcode:"77055",
            date:"12/12/2020",
            suggested_price:232
        })
        expect(response.status).toEqual(400)
        expect(response.body.message).toEqual("City must be a string")
    })

    test("should check if state is a string", async () => {
        const response = await request(app).post("/api/fuelprice").send({
            gallon_requested:23,
            address1:"123 Main St",
            city:"Houston",
            state: 123,
            zipcode:"77055",
            date:"12/12/2020",
            suggested_price:232
        })
        expect(response.status).toEqual(400)
        expect(response.body.message).toEqual("State must be a string")
    })

    test("should check if zipcode is a string", async () => {
        const response = await request(app).post("/api/fuelprice").send({
            gallon_requested:23,
            address1:"123 Main St",
            city:"Houston",
            state: "TX",
            zipcode:123,
            date:"12/12/2020",
            suggested_price:232
        })
        expect(response.status).toEqual(400)
        expect(response.body.message).toEqual("Zipcode must be a string")
    })

    test("should check if date is a string", async () => {
        const response = await request(app).post("/api/fuelprice").send({
            gallon_requested:23,
            address1:"123 Main St",
            city:"Houston",
            state: "TX",
            zipcode:"77055",
            date:123,
            suggested_price:232
        })
        expect(response.status).toEqual(400)
        expect(response.body.message).toEqual("Date must be a string")
    })

    test("should check if suggested price is a number", async () => {
        const response = await request(app).post("/api/fuelprice").send({
            gallon_requested:23,
            address1:"123 Main St",
            city:"Houston",
            state: "TX",
            zipcode:"77055",
            date:"12/12/2020",
            suggested_price:"232"
        })
        expect(response.status).toEqual(400)
        expect(response.body.message).toEqual("Suggested price must be a number")
    })

    test("should check if missing fields", async () => {
        const response = await request(app).post("/api/fuelprice").send({
            gallon_requested:12,
            address1:"",
            city:"",
            state: "",
            zipcode:"",
            date:"",
            suggested_price:232
        })
        expect(response.status).toEqual(400)
        expect(response.body.message).toEqual("Please fill out all fields")
    })

    test("should check if max length of address1 is less than 100", async () => {
        const response = await request(app).post("/api/fuelprice").send({
            gallon_requested:12,
            address1: "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ",
            city:"Houston",
            state: "TX",
            zipcode:"77055",
            date:"12/12/2020",
            suggested_price:232
        })
        expect(response.status).toEqual(400)
        expect(response.body.message).toEqual("Address 1 must be less than 100 characters")
    })

    test("should check if max length of address2 is less than 100", async () => {
        const response = await request(app).post("/api/fuelprice").send({
            gallon_requested:12,
            address1: "123 Main St",
            address2: "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ",
            city:"Houston",
            state: "TX",
            zipcode:"77055",
            date:"12/12/2020",
            suggested_price:232
        })
        expect(response.status).toEqual(400)
        expect(response.body.message).toEqual("Address 2 must be less than 100 characters")
    })

    test("should check if max length of city is less than 100", async () => {
        const response = await request(app).post("/api/fuelprice").send({
            gallon_requested:12,
            address1: "123 Main St",
            city:"ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ",
            state: "TX",
            zipcode:"77055",
            date:"12/12/2020",
            suggested_price:232
        })
        expect(response.status).toEqual(400)
        expect(response.body.message).toEqual("City must be less than 100 characters")
    })

    test("should check if max length of state is less than 2", async () => {
        const response = await request(app).post("/api/fuelprice").send({
            gallon_requested:12,
            address1: "123 Main St",
            city:"Houston",
            state: "TXTX",
            zipcode:"77055",
            date:"12/12/2020",
            suggested_price:232
        })
        expect(response.status).toEqual(400)
        expect(response.body.message).toEqual("State must be less than 2 characters")
    })

    test("should check if zipcode is more than 5 and less than 9", async () => {
        const response = await request(app).post("/api/fuelprice").send({
            gallon_requested:12,
            address1: "123 Main St",
            city:"Houston",
            state: "TX",
            zipcode:"123",
            date:"12/12/2020",
            suggested_price:232
        })
        expect(response.status).toEqual(400)
        expect(response.body.message).toEqual("Zipcode must be less than 9 characters and greater than 5 characters")
    })

    test("should check if date is in the correct format", async () => {
        const response = await request(app).post("/api/fuelprice").send({
            gallon_requested:12,
            address1: "123 Main St",
            city:"Houston",
            state: "TX",
            zipcode:"77055",
            date:"12/12/02022222",
            suggested_price:232
        })
        expect(response.status).toEqual(400)
        expect(response.body.message).toEqual("Date must be in mm/dd/yyyy format")
    })

    test("should check if gallon requested is greater than 0", async () => {
        const response = await request(app).post("/api/fuelprice").send({
            gallon_requested:-4,
            address1: "123 Main St",
            city:"Houston",
            state: "TX",
            zipcode:"77055",
            date:"12/12/2020",
            suggested_price:232
        })
        expect(response.status).toEqual(400)
        expect(response.body.message).toEqual("Gallons requested must be greater than 0")
    })

    test("should check if suggested price is greater than 0", async () => {
        const response = await request(app).post("/api/fuelprice").send({
            gallon_requested:12,
            address1: "123 Main St",
            city:"Houston",
            state: "TX",
            zipcode:"77055",
            date:"12/12/2020",
            suggested_price:-3
        })
        expect(response.status).toEqual(400)
        expect(response.body.message).toEqual("Suggested price must be greater than 0")
    })

    test("should check if all fields are valid", async () => {
        const response = await request(app).post("/api/fuelprice").send({
            gallon_requested:12,
            address1: "123 Main St",
            city:"Houston",
            state: "TX",
            zipcode:"77055",
            date:"12/12/2020",
            suggested_price:232
        })
        expect(response.status).toEqual(200)
        expect(response.body.message).toEqual("Fuel Price created successfully")
    })

})
