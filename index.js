var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
const axios = require("axios")
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
  // try{
    console.log("Hiiiiiiiiiiiiiiii")
   if(req.body){
    console.log("payload",req.body.user.email)
     axios
        .post(
          `https://forum-web3.discourse.group/groups/46/members.json`,
          {
            "emails" : `${req.body.user.email}`
          },
          {
            headers: {
              "content-type": "application/json",
              "Api-Key" : "27c5ed1e15ab4430dafe356e8fbfef878b2c727ab593aa72933499b4c1e64a6d",
              "Api-Username" : "ryuk8954"
            },
          }
        )
        .then((res) => {
            res.status(200).json({
                status: true,
                title: "Email added to group successfully.",
              });
        })
        .catch((err) => {
           res.status(400).json({
                status : false,
                title: "Problem adding group to specific group"
           })
        });
   }
   
       
})


app.listen("3000", function () {
    console.log(`app started listening on port 3000`);
  });
