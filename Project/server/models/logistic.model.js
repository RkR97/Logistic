const mongoose = require('mongoose');

var logisticDataSchema = new mongoose.Schema({
    src: String,
    des: String,
    price: Number
});

var dataModel = mongoose.model('logisticData', logisticDataSchema);
module.exports = dataModel;