const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Week = new Schema({
    PRODUCT: {type: String},
    EXPOSED: {type: String},
    CONTROL: {type: String},
    WEEK_COMMENCING: {type: String}
},
{ collection : 'week' }
);

module.exports = mongoose.model('Week', Week);