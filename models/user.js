const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

// the below line of code adds username and password to the schema
// it also take care of users having unique username
userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);
