'use strict';

// ==========================================================================
// Dit is dummy data, normaal zou je een database connectie gebruiken. SLA DEZE 2 REGELS OVER
var http = {'get': function (route, callback) {var req = {};var res = {send: function (data) {console.log("Send to client:");console.log(data);}};setTimeout(function () {callback(req, res)});}};var db = {query: function (sql) {return new Promise(function (resolve, reject) {setTimeout(function () {resolve([{name: 'ok', visits: 0}, {name: 'ja', visits: 0}]);}, 500);});}};var fs = require('fs-promise');
// ==========================================================================
// Voorbeeld van callback hell met een gesimuleerde database query en actie.


http.get('/users', function(req, res) {//noinspection JSUnresolvedFunction
    db.query("SELECT * FROM users")
        .then(function (users) {
            return db.query("UPDATE users SET visits = visits + 1;");
        })
        .then(function () {
            return fs.readFile('./resultaat.txt', {encoding: 'utf8'});
        })
        .then(function (resultaat) {
            res.send(resultaat);
        })
        .catch(function (error) {
            res.send("Foutmelding!");
        });
});

