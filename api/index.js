// aita sodo vercel deploy jonno 
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import serverless from 'serverless-http';
import sendMessageRouter from '../routes/sendMessage.js';


const allowedOrigins = [ 
  'https://forhad-portfolio-five.vercel.app'
];


//app config
const app = express()

//middlewares
app.use(express.json())
app.use(cors({origin:allowedOrigins,credentials:true}))



//api endpoints
app.use('api/contact',sendMessageRouter)
app.get('api/',(req,res)=>{res.json("backend running in the index.js file")})


export const handler = serverless(app);
export default handler;