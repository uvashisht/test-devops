var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    name : String,
    price : Number,
    desc : String,
    updated_at : { type : Date , default: Date.now()}

});

module.exports = mongoose.model('Product', ProductSchema);