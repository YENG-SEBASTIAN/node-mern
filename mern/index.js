
const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://yengsebastian1:Yeng123@cluster0.zuxqswp.mongodb.net/mernAppDB?retryWrites=true&w=majority"
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