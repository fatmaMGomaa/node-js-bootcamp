const http = require('http');
const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')
const expressHBs = require('express-handlebars')

const adminData = require('./routes/admin')
const shopRouters = require('./routes/shopUser')

const app = express()

app.engine('hbs', expressHBs())
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin', adminData.routes)
app.use(shopRouters)

app.use((req,res,next)=>{
    res.status(404).render('404', { pageTitle: 'Not found', layout:false})
})

app.listen(3000)