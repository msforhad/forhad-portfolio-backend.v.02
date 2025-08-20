import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import sendMessageRouter from './routes/sendMessage.js';


const allowedOrigins=['http://localhost:5173']





//app config
const app = express()
const port = process.env.PORT || 4000

//middlewares
app.use(express.json())
app.use(cors({origin:allowedOrigins,credentials:true}))



//api endpoints
app.use('/contact',sendMessageRouter)
app.get('/',(req,res)=>{res.json("api working")})


app.listen(port,()=>console.log('server started',port))