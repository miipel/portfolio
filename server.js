var express = require('express')
var app = express()

app.use(express.static('public'));
app.use(express.static('views'));


app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
    res.sendFile('index.html');
})

app.listen(app.get('port'), function () {
    console.log("jeejee toimii");
    console.log('KoodiKerho server running on port ' + app.get('port') + "!");
})