
var Parser = function () {

}

Parser.prototype.parse = function (text) {

    var result = {};
    var lines = text.split("\r\n");

    lines.forEach(function (line) {
        line = line.split(' ');
        
        if (!result[line[1]])
            result[line[1]] = 0;
            
        result[line[1]] += parseInt(line[2]);
    });

    return result;
}

module.exports = Parser;