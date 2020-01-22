//const app = require('./app')
const port = process.env.NODE_PORT


const express = require('express')
require('./db/mongoose')
const recordRouter = require('./routers/records')
const app = express()
const { handleResponse } = require("./middleware/response");


app.use(express.json())
app.use(recordRouter)

// for response middleware
app.use((responseHandler, req, res, next) => {
    handleResponse(responseHandler, res);
});


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})