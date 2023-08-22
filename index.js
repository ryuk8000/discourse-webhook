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
    console.log("Hiiiiiiiiiiiiiiii")
    if(req.body.user.email)
    console.log('body',req.body.user.email)
        //   axios
        // .post(
        //   `${process.env.REACT_APP_BASE_URL}/nft-token-gating-configuration`,
        //   {
        //     nftTokenGatingData,
        //   },
        //   {
        //     headers: {
        //       "content-type": "application/json",
        //       token: localStorage.getItem("token"),
        //     },
        //   }
        // )
        // .then((res) => {
        //   swal({
        //     text: res.data.title,
        //     icon: "success",
        //     // type: "success",
        //   });
        //   navigate("/configured-apps");
        // })
        // .catch((err) => {
        //   swal({
        //     text: err.response.data.errorMessage,
        //     icon: "error",
        //     //  type: "error",
        //   });
        // });
     // res.status(200).json({
     //        status: true,
     //     });
})


app.listen("3000", function () {
    console.log(`app started listening on port 3000`);
  });
