import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import transporter from './config/nodemailer.js';
import { contactEmailHTML, contactEmailTEXT } from './utils/emailTemplate.js';
import { autoReplyHTML, autoReplyTEXT } from './utils/autoReplyTemplate.js';

const allowedOrigins = [ 
  'https://forhad-portfolio.onrender.com'
];

  const PORT = process.env.PORT || 4000;

const app = express()

// JSON parser
app.use(express.json())

// ✅ CORS setup for Vercel
app.use(cors({
  origin:allowedOrigins,
  credentials: true
})
)

// ✅ API routes
app.post('/contact/send-message',async(req,res)=>{
  const {name,email,phone,message}=req.body;
      if(!name||!email||!phone||!message){
      return res.json({success:false,message:'All fields are required!'})
    }

  try {

    await transporter.sendMail({
      
      from:`"FO|RH|AD Contact" <${process.env.SENDER_EMAIL}>`,
      to:process.env.SENDER_EMAIL,
      subject:`New Message from ${name}`,
      html: contactEmailHTML({ name, email, phone, message, brandName: "FO|RH|AD",}),
      text: contactEmailTEXT({ name, email, phone, message, brandName: "FO|RH|AD" }),
      replyTo: email,
      headers: { "X-Entity-Ref-ID": Date.now().toString() },
      priority: "high"

    })

    // 2️⃣ Auto-reply to client
    await transporter.sendMail({
      from: `"FO|RH|AD" <${process.env.SENDER_EMAIL}>`,
      to: email,
      subject: `Thank you for contacting FO|RH|AD!`,
      html: autoReplyHTML({ name, brandName: "FO|RH|AD",}),
      text: autoReplyTEXT({ name, brandName: "FO|RH|AD" })
    });


  
    return res.json({success:true,message:' Your message has been successfully sent!'})
    
  } catch (error) {
    return res.json({success:false,message:"Failed to send message. Try again later."})
    
  }
})

app.get('/', (req,res) => {
  res.json("Forhad portfolio backend server running 🚀")
})

// ✅ Local server run
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


export default app;


