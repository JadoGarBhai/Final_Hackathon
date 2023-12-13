const mongoose = require("mongoose");

// Define the main schema
const drSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.ObjectId,
    name: {
      type: String,
    },
    specialization: {
      type: String,
    },
    contactinfo: {
      type: String,
    },
    fee: {
      type: Number,
    },
    timing: {
      type: String,
    },
  },
  { collection: "doctor", versionKey: false }
);

const Doctor = mongoose.model("doctor", drSchema);

module.exports = Doctor;
