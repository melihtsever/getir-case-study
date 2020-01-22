const mongoose = require('mongoose')

// mongoose.connect(`mongodb://${process.env.Mongo_User}@${process.env.Mongo_Ip}/${process.env.Mongo_Db}`, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
// })

mongoose.connect(process.env.Mongo, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

