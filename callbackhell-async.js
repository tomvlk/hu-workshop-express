// ==========================================================================
// Dit is dummy data, normaal zou je een database connectie gebruiken. SLA DEZE 2 REGELS OVER
var http = {'get': function (route, callback) {var req = {};var res = {send: function(data) {console.log("Send to client:");console.log(data);}};setTimeout(function() {callback(req, res)});}};var db = {query: function (sql, callback) {setTimeout(function() {callback(null, [{name: 'ok', visits: 0}, {name: 'ja', visits: 0}])}, 500);}};var fs = require('fs');
// ==========================================================================
// Voorbeeld van callback hell met een gesimuleerde database query en actie.
var async = require('async');

http.get('/users', function(req, res) {
    async.series([
        function (callback) {
            db.query("SELECT * FROM users", function (err, users) {
                callback(err, users);
            });
        },
        function (callback) {
            db.query("UPDATE users SET visits = visits + 1;", function (err, update) {
                callback(err, update);
            });
        },
        function (callback) {
            fs.readFile('./resultaat.txt', {encoding: 'utf8'}, function (err, content) {
                callback(err, content);
            });
        }
    ],
    function (err, result) {
        if (err) {
            res.send("Foutmelding!");
            return;
        }

        // Result wordt array met 3 results van de serie lijst hierboven. Dus 2 wordt de content van het bestand
        res.send(result[2]);
    });
});


