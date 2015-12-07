
// Require our storage lib
var storage = require('./../lib/followerStorage');

// Make new object as export
module.exports = {};

// Assign key with function to export object. Express action.
module.exports.getHome = function (req, res, next) {
    // First we will get our list of followers from our storage
    var list = storage;

    // Next we will start rendering our view with our list object
    res.render('home', {
        followList: list,
        isSuccess: req.query.hasOwnProperty('success'),
        isError: req.query.hasOwnProperty('error')
    });
};


// Post homepage
// TODO: Voeg city veld bij.
module.exports.postHome = function (req, res, next) {
    // Map from the posted body
    var name = req.body.name;
    var email = req.body.email;

    // Check for empty or undefined variables
    if (!name || !email) {
        // It's undefined or empty, send the user back to our index with error.
        res.redirect('/?error');
        return; // Don't continue this function anymore;
    }

    // All variables are okay. Lets check if we have an user with the same email address
    if (storage.hasOwnProperty(email)) {
        // Yes! Not possible!
        res.redirect('/?error');
        return;
    }

    // Ok, lets create the object inside the storage. Currently only the name is given by the form.
    storage[email] = {
        name: name
    };

    // After saving, reload the homepage with the success message
    res.redirect('/?success');
};
