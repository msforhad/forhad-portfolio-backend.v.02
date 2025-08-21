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

app.use(express.json())

// ✅ CORS setup on vercel deploy
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps, curl, postman)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

//middlewares

// app.use(cors({origin:allowedOrigins,credentials:true}))



//api endpoints
app.use('api/contact',sendMessageRouter)
app.get('api/',(req,res)=>{res.json("forhad portfolio backend server")})


export const handler = serverless(app);
export default handler;