
import {asyncHandler} from '../Utils/AsyncHandler.utils.js'
import nodemailer from 'nodemailer'
import { LoginWitlmail } from '../Model/Login_with_mail_model.js'
import { Login } from '../Model/Login.model.js'
import { ApiError } from '../Utils/ApiError.utils.js'

const LoginwithMail = asyncHandler(async(req,res)=>{

    const {mail} = req.body
   

   if (user && user1) {
     throw new ApiError(403,'Your email is alraedy ragisted with us')
   }else{
    res.send({message:'Your mail'})
   }

    // Setting Up the nodemailer

    const transporter = nodemailer.createTransport({
        service:"gmail",
        host:'smtp.google.com',
        port:465,
        secure:true,
        auth:{
            user:'shoplootera.shop.official@gmail.com',
            pass:'kpnrldyosenrmtub'
        }
    })


    const otp = Math.floor(100000 + Math.random() * 900000);


    const info = await transporter.sendMail({
        from: '"The Placemate " <shoplootera.shop.official@gmail.com>',
        to:`${mail}`,
        subject:'Login OTP for Placemate',
        text:'Hii this is me',
        html:`
        <b>
        Dear Customer,

Thank you for choosing The Placemate. Your One-Time Password (OTP) for login is:

<h4>${otp}</h4>

Please enter this OTP to complete your login process. This code is valid for the next 10 minutes.

If you did not request this OTP, please ignore this email or contact our support team immediately.

Best regards,

The Placemate Team
        </b>
        `
    })




    res.status(200).json(
        {message:'Email-sent'})

})


import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import twilio from 'twilio'

import passport from "passport";
import oauthStartergy from 'passport-google-oauth2'






const Auth = oauthStartergy.Strategy;







export {LoginwithMail}



const GooleLogin = asyncHandler(async(req,res)=>{
   
})


export {GooleLogin}
