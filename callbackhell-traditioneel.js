// ==========================================================================
// Dit is dummy data, normaal zou je een database connectie gebruiken. SLA DEZE 2 REGELS OVER
var http = {'get': function (route, callback) {var req = {};var res = {send: function(data) {console.log("Send to client:");console.log(data);}};setTimeout(function() {callback(req, res)});}};var db = {query: function (sql, callback) {setTimeout(function() {callback(null, [{name: 'ok', visits: 0}, {name: 'ja', visits: 0}])}, 500);}};var fs = require('fs');
// ==========================================================================
// Voorbeeld van callback hell met een gesimuleerde database query en actie.


http.get('/users', function(req, res) {
    function klaarMetUserSelect(err, users) {
        if (err) {
            res.send("Foutmelding");
            return;
        }
        db.query("UPDATE users SET visits = visits + 1;", klaarMetUpdate);
    }
    function klaarMetUpdate(err, update) {
        if (err) {
            res.send("Foutmelding");
            return;
        }
        fs.readFile('./resultaat.txt', {encoding: 'utf8'}, klaarMetBestandLezen);
    }
    function klaarMetBestandLezen(err, content) {
        if (err) {
            res.send("Foutmelding");
            return;
        }
        res.send(content);
    }

    // Begin hier
    db.query("SELECT * FROM users", klaarMetUserSelect);
});


