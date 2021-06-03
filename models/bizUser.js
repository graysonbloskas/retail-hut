const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bizUserSchema = new Schema({
  shopName: [{ type: String, required: true, trim: true}],
 
  businessUsername: { type: String, required: true, trim: true },

  email: { type: String, required: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"] },

  password: [{ type: String, validate: [({ length }) => length >= 6, "Password needs to contain more than 6 characters"]}],


});

const BizUser = mongoose.model("BizUser",bizUserSchema);

module.exports = BizUser;