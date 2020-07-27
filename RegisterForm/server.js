var express = require('express');
var mysql = require('mysql');
var bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,x-Requested-With,Content-Type,Accept");
    next();
});

var connection = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "Gitam@123",
  database : "project"  
});

connection.connect(function(err){
    if(!err){
        console.log('Database is connected...');
    }
    else{
        console.log('error is connecting database');
    }
})

app.listen(3000,()=>{
    console.log("server is running");
});

app.get('/',function(req,res){
    res.json({msg:"welcome to node.js API"});
});


app.post('/registerform',(req,res)=>{
    let data = req.body;
    console.log(data);
    connection.query("Insert into registerform set ?",data,function(error,results,fields){
        if(error){
            res.send({
                "code":400,
                "failed":"error ocurred"
            });
        }
        else{
            res.send({
                "code":200,
                "success":"User registration is completed"
            });
        }
    });
});


app.post('/signin',(req,res)=>{
    let username = req.body.username;
    let password = req.body.password;
    console.log(username,password);
    connection.query('select username,password from registerform where username= ? and password= ? ',[username,password],function(error,results,fields){
        var x=JSON.stringify(results);
        if(x=="[]"){
            res.send({
                "code":400,
                "error":"can't find the username and password"
            });
        }
        else{
            res.send({
                "code":200,
                "success":"successful login"
            });
        }
    });
});

