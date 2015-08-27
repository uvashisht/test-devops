var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
    product_name : String,
    user_name : String,
    qty : Number,
    desc : String,
    status : String,
    updated_at : { type : Date , default: Date.now()}

});

module.exports = mongoose.model('Order', OrderSchema);