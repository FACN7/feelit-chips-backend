const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
// const path = require('path');

require('dotenv').config();

const chipRoutes = require('./routes/chip');


const app = express();


mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    dbName: process.env.DB_NAME,
    useFindAndModify: false
}).then(() => console.log('DB CONNECTED'))

app.use(cors());
app.use(bodyParser.json());


app.use('/', chipRoutes);


// if (process.env.NODE_ENV === "production") {
//     app.use(
//         express.static(path.join(__dirname, "..", "bookstore-front", "build"))
//     );
//     app.get("*", (req, res) => {
//         res.sendFile(path.join(__dirname, "..", "bookstore-front", "build", "index.html"))
//     });
// }

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})


