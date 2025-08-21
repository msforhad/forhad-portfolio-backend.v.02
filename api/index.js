import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import serverless from 'serverless-http';
import sendMessageRouter from '../routes/sendMessage.js';

const allowedOrigins = [ 
  'https://forhad-portfolio-five.vercel.app'
];

const app = express()

// JSON parser
app.use(express.json())

// ✅ CORS setup for Vercel
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true)
      } else {
        callback(new Error("Not allowed by CORS"))
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
)

// ✅ API routes
app.use('/api/contact', sendMessageRouter)
app.get('/api', (req,res) => {
  res.json("Forhad portfolio backend server running 🚀")
})

export const handler = serverless(app)
export default handler
