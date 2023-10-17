const express = require('express');
const bodyParser = require('body-parser')

const app = express()

const path = require('path')

const adminroutes = require('./routes/admin')
const shoproutes = require('./routes/shop')
const contactRoutes = require('./routes/contactus')

app.use(bodyParser.urlencoded({extended: false}))

app.use('/admin',adminroutes)
app.use(shoproutes)
app.use(contactRoutes)
app.use(express.static(path.join(__dirname,'public')))

app.use((req,res,next) => {
         res.status(404).sendFile(path.join(__dirname,'views','404.html'))   
})


app.listen(4000);
