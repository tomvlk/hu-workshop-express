
// Make the module variable that we are going to export later
var storage = {};

// Add the default entries, static with boot of the app
storage['Thomas50@hotmail.com'] = {
    name: 'Thomas Klein',
    city: 'Utrecht'
};

storage['AShoutje1@gmail.com'] = {
    name: 'Anouk Schouten',
    city: 'Utrecht'
};

storage['bram.heuvel@icloud.com'] = {
    name: 'Bram Heuvel',
    city: 'De Meern'
};



// Export the storage object
module.exports = storage;

