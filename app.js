const express=require("express");
const bodyParser=require("body-parser");
const https=require("https");
const app=express();
let Tasks=[];
app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
  const today=new Date();
  var options={
    weekday:"long",
    day:"numeric",
    month:"long"
  };
  var day=today.toLocaleDateString("en-US",options);
  res.render("list",{kindOfDay: day,newTasks:Tasks});
});
app.listen(3000,function(){
  console.log("server tuned to port 3000");
});
app.post("/",(req,res)=>{
  
  Tasks.push(req.body.task);
  res.redirect("/");
});

