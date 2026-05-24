const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({

  host:"localhost",
  user:"root",
  password:"Varsha@49",
  database:"portfolio"

});

db.connect((err)=>{

  if(err){
    console.log(err);
  }
  else{
    console.log("MySQL Connected");
  }

});

app.get("/", (req,res)=>{

  res.send("Backend Running Successfully");

});

app.post("/contact", (req,res)=>{

  const { name, email, message } = req.body;

  const sql =
  "INSERT INTO contacts(name,email,message) VALUES(?,?,?)";

  db.query(
    sql,
    [name,email,message],
    (err,result)=>{

      if(err){
        console.log(err);
        res.send("Error");
      }
      else{
        res.send("Message Sent Successfully");
      }

    }
  );

});

app.listen(5000, ()=>{

  console.log("Server Running on Port 5000");

});