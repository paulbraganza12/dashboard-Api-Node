const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Top = new Schema({
    METRIC: {type: String},
    PRODUCT: {type: String},
    EXPOSED: {type: String},
    CONTROL: {type: String},
    UPLIFT: {type: String},
    PCT_UPLIFT: {type: String}
},
{ collection : 'top' }
);

module.exports = mongoose.model('Top', Top);