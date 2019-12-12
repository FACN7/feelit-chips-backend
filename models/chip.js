const mongoose = require('mongoose');



const chipSchema = new mongoose.Schema({
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
    sensors: {
        newPrint: {
            s0: { layer: { type: Number }, resistance: { type: String } },
            s1: { layer: { type: Number }, resistance: { type: String } },
            s2: { layer: { type: Number }, resistance: { type: String } },
            s3: { layer: { type: Number }, resistance: { type: String } },
            s4: { layer: { type: Number }, resistance: { type: String } },
            s5: { layer: { type: Number }, resistance: { type: String } },
            s6: { layer: { type: Number }, resistance: { type: String } },
            s7: { layer: { type: Number }, resistance: { type: String } }
        },
        curing: [{
            s0: {
                min: { type: Number },
                resistance: { type: String },
                temperature: { type: Number },
                valid: { type: Boolean },
                curingType: { type: String },
                pulses: { type: Number },
                height: { type: Number }
            },
            s1: {
                min: { type: Number },
                resistance: { type: String },
                temperature: { type: Number },
                valid: { type: Boolean },
                curingType: { type: String },
                pulses: { type: Number },
                height: { type: Number }
            },
            s2: {
                min: { type: Number },
                resistance: { type: String },
                temperature: { type: Number },
                valid: { type: Boolean },
                curingType: { type: String },
                pulses: { type: Number },
                height: { type: Number }
            },
            s3: {
                min: { type: Number },
                resistance: { type: String },
                temperature: { type: Number },
                valid: { type: Boolean },
                curingType: { type: String },
                pulses: { type: Number },
                height: { type: Number }
            },
            s4: {
                min: { type: Number },
                resistance: { type: String },
                temperature: { type: Number },
                valid: { type: Boolean },
                curingType: { type: String },
                pulses: { type: Number },
                height: { type: Number }
            },
            s5: {
                min: { type: Number },
                resistance: { type: String },
                temperature: { type: Number },
                valid: { type: Boolean },
                curingType: { type: String },
                pulses: { type: Number },
                height: { type: Number }
            },
            s6: {
                min: { type: Number },
                resistance: { type: String },
                temperature: { type: Number },
                valid: { type: Boolean },
                curingType: { type: String },
                pulses: { type: Number },
                height: { type: Number }
            },
            s7: {
                min: { type: Number },
                resistance: { type: String },
                temperature: { type: Number },
                valid: { type: Boolean },
                curingType: { type: String },
                pulses: { type: Number },
                height: { type: Number }
            }
        }]
    }
},

    { timestamps: true }
);




module.exports = mongoose.model("Chip", chipSchema);
