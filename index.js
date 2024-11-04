require("dotenv").config();
const app=require('./app');

PORT=process.env.PORT || 5000;
app.listen(PORT,(req,res)=>{
    console.log(`server is running at http://localhost:${PORT}`);
});
