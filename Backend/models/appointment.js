const mongoose = require("mongoose");
const appointmentSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.ObjectId,
    doctorName: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    timing: {
      type: String,
      required: true,
    },
    patientName: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { collection: "appointment", versionKey: false }
);

const Appointment = mongoose.model("appointment", appointmentSchema);
module.exports = Appointment;
