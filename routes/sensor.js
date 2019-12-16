const express = require("express");
const router = express.Router();

const { createSensor, getSensorsList, getSensorsById, addCuringJob } = require("../controllers/sensor");

router.post("/print-resistance-table", createSensor);
router.post("/curing-table", addCuringJob);
router.get("/get-sensors", getSensorsList);
router.get("/get-sensors/:sensorId", getSensorsById);
router.param("sensorId", getSensorsById);

module.exports = router;
