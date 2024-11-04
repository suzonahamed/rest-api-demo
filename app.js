const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
// const users=require("..//models/users.model")
const userRouter=require("./routes/users.route");
const app=express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/users",userRouter);

//home route
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html")
});

//route not found
app.use((req,res,next)=>{
    res.status(404).json({
        message:"Server is not found"
    })
});

//server error
app.use((err,req,res,next)=>{
    res.status(5000).json({
        message:"something broke"
    })
})

module.exports=app;