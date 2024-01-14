
const express = require("express");
const mongoose = require("mongoose");
import { DB_URL } from "./utils/secrets";

mongoose.connect(
    DB_URL
).then(
    () => console.log("\n Database connected successful.")
).catch(
    (err) => console.log("\n Database connection failed. ", err)
)

const app = express();

//middleware
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world! Welcome to my first node server")
})

app.listen(4000, () => console.log("App is running on port 4000..."))