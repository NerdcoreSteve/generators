const
    generators = require('./generators'),
    express = require('express'),
    app = express()

app.use(express.static('public'))  
app.set('view engine', 'pug')

app.get('/', function (req, res) {  
    res.render('index')
})

app.listen(3000, function () {  
    console.log('Example app listening on port 3000!')
})

generators()
