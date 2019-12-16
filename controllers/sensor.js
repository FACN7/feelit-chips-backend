const Sensor = require("../models/Sensor");
const Counter = require("../models/Counter");

async function getNextSequenceValue () {
  try {
    const sequenceDocument = await Counter.findOneAndUpdate(
      { _id: "5df7691d1c9d440000bf718d" },
      { $inc: { sequence_value: 1 } },
      { new: true });
    return sequenceDocument.sequence_value;
  } catch (error) {
    console.log(error);
  }
}

exports.createSensor = async (req, res) => {
  const sensor = new Sensor(req.body);
  const { electrodeType, electrodeBatchDate, printer, inkType, concentration } = req.body.specs;
  sensor.specs.serialNumber = await getNextSequenceValue();
  sensor.specs.name = `${electrodeType}_${electrodeBatchDate}_${printer}_${inkType}_${concentration}_${sensor.specs.serialNumber}`;
  req.body.resistance.createdAt = new Date();
  sensor.resistanceSamplesHistory.push(req.body.resistance);
  sensor.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    res.send();
  });
};

exports.getSensorsList = (req, res) => {
  Sensor.find()
    .select("_id specs.serialNumber createdAt")
    .exec((err, sensorsFromDB) => {
      if (err) {
        return res.status(400).json({
          error: "sensors not found!"
        });
      }
      const sensors = sensorsFromDB.map(sensor => {
        const { serialNumber } = sensor.specs;
        const { _id, createdAt } = sensor;
        return {
          serialNumber,
          _id,
          createdAt
        };
      });
      const sensorsList = { sensors };
      res.json(sensorsList);
    });
};

exports.getSensorsById = (req, res, next, id) => {
  Sensor.findById(id).exec((err, sensor) => {
    if (err || !sensor) {
      return res.status(400).json({
        error: "sensor not found"
      });
    }
    const result = {
      _id: sensor._id,
      printingLayers: sensor.printingLayers,
      resistance: sensor.resistanceSamplesHistory[sensor.resistanceSamplesHistory.length - 1]
    };

    res.json(result);
  });
};

exports.addCuringJob = (req, res) => {
  Sensor.findById(req.body._id).exec((err, sensor) => {
    if (err || !sensor) {
      return res.status(400).json({
        error: "sensor not found"
      });
    }
    req.body.curing.createdAt = new Date();
    sensor.curingHistory.push(req.body.curing);
    sensor.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err
        });
      }
      res.send();
    });
  });
};
