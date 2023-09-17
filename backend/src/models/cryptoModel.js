const { Schema, model } = require("mongoose");

const cryptoDataSchema = new Schema({
    last: String,
    buy: String,
    sell: String,
    volume: String,
    base_unit: String,
});

const cryptoData = model('crypto-data', cryptoDataSchema);
module.exports = cryptoData;