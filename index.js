

const express = require('express')
const mongoose = require('mongoose')
const PORT = 3000

const app = express()

mongoose.connect(`mongodb://localhost:27017/bearerauth`, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => {
    console.log(`connected to mongodb`)
})
.catch(e => {
    console.log(`an error occurred`)
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('welcome to the Homepage')
})

app.listen(PORT, () => {
    console.log(`app is running on ${PORT}`)
})