const express = require("express");
const path = require("path")
const app = express();
const port = 4000;


app.use(express.static(path.resolve(__dirname, "./build")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname + "./build/index.html"))
    
})

app.listen(process.env.PORT || port, () => {
    console.log("Server Runnning on Port " + port)
})

