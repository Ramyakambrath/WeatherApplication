const express=require('express')
const app=express();
app.use('/api/weather',require('./routes/api/weather'));

const port=process.env.PORT || 5000;
app.listen(port,()=>{
console.log(`listening to port ${port}`)
})