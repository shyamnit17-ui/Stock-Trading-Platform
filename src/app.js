const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
//app.use(express.json);
app.get("/api/health", (req,res) => {
    res.send("Stock api working");
});
app.listen(8080, () => {
    console.log("listening on port 8080");
});

module.exports = app;