const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const sensorRoutes = require("./routes/sensor");
const sensorCreateOptionsRoutes = require("./routes/sensorCreateOptions");
const userRoutes = require("./routes/User");
const authRoutes = require("./routes/auth");
const app = express();

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  dbName: process.env.DB_NAME,
  useFindAndModify: false
}).then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("mongoose error", err));

app.use(cors({
  origin: "https://feelit.netlify.com",
  optionsSuccessStatus: 200
}));

app.use(bodyParser.json());
app.use(cookieParser());

app.use("/", sensorRoutes);
app.use("/", sensorCreateOptionsRoutes);
app.use("/", userRoutes);
app.use("/", authRoutes);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
