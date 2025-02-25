const express= require("express");
const app=express();
const cors= require("cors");
const bodyParser = require('body-parser');
const mongoose= require("mongoose");
const doctorRoute= require("./routes/doctorRoute");
require("dotenv").config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(process.env.DBCONN).then(()=>{
    console.log("DB connected!!!");
})
app.use("/doctor", doctorRoute);
const Port=process.env.PORT || 8080;
app.listen(Port, ()=>{
    console.log(`server run on  port ${Port}`);
})