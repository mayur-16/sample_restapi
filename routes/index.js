const express = require("express");
const controllers = require("../controllers");
const router=express.Router();

router.route("/getclientdetails").get(controllers.getAllClients);

module.exports=router;