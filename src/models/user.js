const mongoose = require("mongoose");
const userModel = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phone: {
    type: Number,
    require: true,
    unique: true,
  },
});

module.exports = mongoose.model("users", userModel);
