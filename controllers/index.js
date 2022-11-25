const AppError = require("../utils/appError");
const conn = require("../services/db");


exports.getAllClients = (req, res, next) => {
    
    console.log("getting data");
    conn.query("SELECT * FROM clientdetails", function (err, data, fields) {
      if(err) return next(new AppError(err))
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
   };