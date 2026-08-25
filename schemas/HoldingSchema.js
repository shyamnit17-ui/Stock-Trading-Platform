const{Schema}=require("mongoose");
const HoldingSchema= new Schema({
    name:String,
    qty:Number,
    price:Number,
    net:String,
    day:String,
});
module.exports = {HoldingSchema};