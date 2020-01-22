const mongoose = require('mongoose')

// mongoose.connect(`mongodb://${process.env.Mongo_User}@${process.env.Mongo_Ip}/${process.env.Mongo_Db}`, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
// })

mongoose.connect(`mongodb://dbUser:dbPassword1@ds249623.mlab.com:49623/getir-case-study`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

