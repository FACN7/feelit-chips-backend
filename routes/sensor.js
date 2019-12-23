const express = require("express");
const router = express.Router();

const { createSensor, getSensorsList, getSensorsById, addCuringJob } = require("../controllers/sensor");
const { isAuth } = require("../controllers/auth");

router.post("/print-resistance-table", isAuth, createSensor);
router.post("/curing-table", isAuth, addCuringJob);
router.get("/get-sensors", isAuth, getSensorsList);

router.get("/get-sensors/:sensorId", isAuth, getSensorsById);
router.param("sensorId", getSensorsById);

module.exports = router;
