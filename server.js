const express = require("express");
const pool = require("./db");
const app = express();
const PORT = 5000;

app.use(express.json());
app.get("/",(req,res)=>{
  res.send("hello")
});

//ユーザー情報を全て取得
app.get("/users",(req,res)=>{
  pool.query("SELECT * FROM users",(error,results)=>{
    if(error) throw error;
    return res.status(200).json(results.rows);
  });
});

//特定のユーザーを取得する
app.get("/users/:id",(req,res)=>{
 const id = req.params.id
  pool.query("SELECT * FROM users WHERE id=$1",[id],(error,results)=>{
    if(error) throw error;
    return res.status(200).json(results.rows);
  });
});


app.listen(PORT,()=>{
  console.log("server is running on PORT"+PORT);
});