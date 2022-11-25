const mysql= require('mysql');

const conn=mysql.createConnection({
    host:"localhost",
    user:"mayur",
    password:"IfaSoft76764981",
    database:"gro",
});

conn.connect();

module.exports=conn;