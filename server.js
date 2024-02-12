const express = require("express");
const app = express();

app.listen(3000, (req, res, next)=>{
    console.log("listening to port 3000");
})