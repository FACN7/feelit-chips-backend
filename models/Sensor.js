const mongoose = require("mongoose");

const sensorSchema = new mongoose.Schema(
  {
    // Now putting settings inside specs
    specs: {
      // Serial number is now auto-generated on BE
      serialNumber: {
        type: String,
        trim: true,
        maxlength: 255
      },
      electrodeType: {
        type: String,
        required: true,
        maxlength: 255
      },
      printer: {
        type: String,
        required: true,
        maxlength: 255
      },
      inkType: {
        type: String,
        required: true,
        maxlength: 255
      },
      concentration: {
        type: String,
        required: true,
        maxlength: 4
      },
      electrodeBatchDate: {
        type: String,
        required: true,
        maxlength: 255
      },
      // now adding name (this will need to be calculated on BE)
      // format for name is '${electrodeType}-${electrodePatchDate}-${Printer}-${inkType}-${concentraion}-${serialNum}'
      name: { type: String }
    },
    // now we separate printing layer
    printingLayers: {
      a0: { type: String },
      a1: { type: String },
      a2: { type: String },
      a3: { type: String },
      a4: { type: String },
      a5: { type: String },
      a6: { type: String },
      a7: { type: String }
    },
    // now we have seperate array for all of resistance history
    resistanceSamplesHistory: [
      {
        date: { type: Date },
        process: { type: String }, // initial/curing/coating/test
        a0: { type: String },
        a1: { type: String },
        a2: { type: String },
        a3: { type: String },
        a4: { type: String },
        a5: { type: String },
        a6: { type: String },
        a7: { type: String }
      }
    ],
    // curing history is seperate
    curingHistory: [
      {
        date: { type: Date },
        type: { type: String }, // thermal or photonic
        a0: {
          min: { type: Number },
          resistance: { type: String },
          temperature: { type: Number },
          valid: { type: Boolean },
          curingType: { type: String },
          pulses: { type: Number },
          height: { type: Number }
        },
        a1: {
          min: { type: Number },
          resistance: { type: String },
          temperature: { type: Number },
          valid: { type: Boolean },
          curingType: { type: String },
          pulses: { type: Number },
          height: { type: Number }
        },
        a2: {
          min: { type: Number },
          resistance: { type: String },
          temperature: { type: Number },
          valid: { type: Boolean },
          curingType: { type: String },
          pulses: { type: Number },
          height: { type: Number }
        },
        a3: {
          min: { type: Number },
          resistance: { type: String },
          temperature: { type: Number },
          valid: { type: Boolean },
          curingType: { type: String },
          pulses: { type: Number },
          height: { type: Number }
        },
        a4: {
          min: { type: Number },
          resistance: { type: String },
          temperature: { type: Number },
          valid: { type: Boolean },
          curingType: { type: String },
          pulses: { type: Number },
          height: { type: Number }
        },
        a5: {
          min: { type: Number },
          resistance: { type: String },
          temperature: { type: Number },
          valid: { type: Boolean },
          curingType: { type: String },
          pulses: { type: Number },
          height: { type: Number }
        },
        a6: {
          min: { type: Number },
          resistance: { type: String },
          temperature: { type: Number },
          valid: { type: Boolean },
          curingType: { type: String },
          pulses: { type: Number },
          height: { type: Number }
        },
        a7: {
          min: { type: Number },
          resistance: { type: String },
          temperature: { type: Number },
          valid: { type: Boolean },
          pulses: { type: Number },
          height: { type: Number }
        }
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sensor", sensorSchema);
