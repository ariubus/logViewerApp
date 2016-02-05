var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/logViewerApp'));

app.listen(8080);