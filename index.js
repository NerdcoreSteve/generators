var express = require('express')  
var app = express()  
app.use(express.static('public'))  
app.set('view engine', 'pug')

app.get('/', function (req, res) {  
    res.render('index')
})

app.listen(3000, function () {  
    console.log('Example app listening on port 3000!')
})

function* idMaker(){
  var index = 0;
  while(index < 3)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined
