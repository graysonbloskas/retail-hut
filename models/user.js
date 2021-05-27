const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, trim: true },

  email: { type: String, required: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"] },

  password: [{ type: String, validate: [({ length }) => length >= 6, "Password needs to contain more than 6 characters"]}],

  firstName: [{ type: String, required: true, trim: true}],

  lastName: [{ type: String, require: true, trim: true}], 

  address: [{ type: String, required: true}]

});

const User = mongoose.model("User", UserSchema);

module.exports = User;