const request = require('supertest')
const app = require('../src/app')

// succes test obj
// testObj = {
//     startDate: "2017-02-21",
//     endDate: "2020-02-22",
//     minCount: 10,
//     maxCount: 501
// };


// if respond succesfully return code 0
test('Should respond succesfully', async () => {
    const response = await request(app).post('/records').send({
        startDate: "2017-02-21",
        endDate: "2020-02-22",
        minCount: 10,
        maxCount: 501
    }).expect(200)
    expect(response.body.code).toBe(0);
})


// if missing parameter response return code 2
test('missing startDate', async () => {
    const response = await request(app).post('/records').send({
        endDate: "2020-02-22",
        minCount: 10,
        maxCount: 501
    }).expect(400)
    expect(response.body.code).toBe(2);
})


// if invalid  date parameter format or type response return code 3
test('if invalid   date parameter format', async () => {
    const response = await request(app).post('/records').send({
        startDate: "20-02-2000",
        endDate: "2020-02-22",
        minCount: 10,
        maxCount: 501
    }).expect(400)
    expect(response.body.code).toBe(3);
})



// if record does not exist return code 1
test('if record does not exist ', async () => {
    const response = await request(app).post('/records').send({
        startDate: "2017-02-21",
        endDate: "2020-02-22",
        minCount: 10000,
        maxCount: 501
    }).expect(404)
    expect(response.body.code).toBe(1);
})