const mongoose = require("mongoose");

const BusinessSchema = new mongoose.Schema({
  name: String,
  phone: String,
  style: String,
  location: String,
  hours: String,
  menu: Array,
  catalog: Array,
  buttons: Array,
});

module.exports = mongoose.model("Business", BusinessSchema);
