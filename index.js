
var Parser = require('./components/parser/parser');
var fs = require('fs');

var text = fs.readFile('./logs/log.txt','utf8', function(err, data){
    
    var parser = new Parser();
    var result = parser.parse(data);
    
    console.log(JSON.stringify(result));
    
})


