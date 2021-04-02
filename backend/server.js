const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Home = require('./routes/home');

const app = express();
app.use(express.json());
app.use(cors());

// DB Config
const db = require('./config/keys').mongoURI;
mongoose
    .connect(db, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
    .then(() => {
        console.log("MongoDB database connected")
    })
    .catch(err => console.log(err))

//Static folder
app.use(express.static("../frontend/build"));

// Routes
const path = require("path");
app.get("/", (req, res) => {
    res.sendFile(path.resolve("../", "frontend", "public", "index.html"));
});
app.use('/api/home/', Home)

// Server Config
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});