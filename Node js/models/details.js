const mongoose = require('mongoose');

var Details = mongoose.model('details', {
    name: {type: String},
    position: {type: String},
    office: {type: String},
    salary: {type: String}
});

module.exports = { Details };