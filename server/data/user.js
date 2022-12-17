const mongoose = require("mongoose");

const  userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  isActive: {
    type: Boolean,
    default:true
  }
});

const User = mongoose.model("Users", userSchema);
module.exports = User;
