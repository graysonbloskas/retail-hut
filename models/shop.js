const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shopSchema = new Schema({

name:{ type: String, required: true },

href: { type: String, default: "" }
});

const Shop = mongoose.model("Shop",  shopSchema);

module.exports = Shop;

