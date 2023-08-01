const path = require("path");
const express = require("express");
const app = express();
const PORT = 80;


app.get("/", (req, res) => {
    res.sendFile(path.resolve("./src/index.html"));
})


app.listen(PORT, () => {
    console.log("listening on port " + PORT);
});
