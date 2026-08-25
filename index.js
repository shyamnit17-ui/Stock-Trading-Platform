const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
require('dotenv').config();
const dburl=process.env.MONGOURL;

const PORT=8080;
async function main(dburl) {
    await mongoose.connect(dburl).then(()=>{
        console.log("mongodb connected");
    });
}
main(dburl).catch(err=>{
    console.log(err);
})
app.listen(PORT, () => {
    console.log("app is listening on port 8080");
})