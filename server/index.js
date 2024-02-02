import express from 'express';
const app = express();
import 'dotenv/config'
const port=process.env.PORT;
 
app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/api/playername',(req,res)=>{
    res.send('Arshdeep Singh')
})

app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
});

