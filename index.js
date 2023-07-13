var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");

const http = require("http");


app.use(cors());
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: false,
  })
);


app.post("/add-wallet-to-groups",async(req,res)=>{
    console.log("Hiiiiiiiiiiiiiiii")
})


app.listen("3000", function () {
    console.log(`app started listening on port 3000`);
  });
