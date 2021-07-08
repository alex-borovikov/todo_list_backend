require('dotenv').config();
const express = require('express')
const app = express();

const PORT = process.env.PORT || 5000
const mongoose = require('mongoose')
const colors = require('colors')
app.disable('x-powered-by')


//Routes
const todoRouter = require('./routes/task.router')

//Middlewares
app.use(express.json())
app.use('/api/task', todoRouter)




const server = () => {
    try{
        mongoose.connect(`mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.5oduw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true
            })
        app.listen(PORT, () => {
            console.log(`Server started at port: ${PORT}`.blue)
        })
    }
    catch(err){
        console.log(err)
    }
}
server()