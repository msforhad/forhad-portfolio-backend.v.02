import express from 'express'
import { sendMessageController } from '../controller/sendMessageController.js';


const sendMessageRouter = express.Router();

sendMessageRouter.post('/send-message',sendMessageController)

export default sendMessageRouter