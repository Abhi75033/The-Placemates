
import { Router } from "express";

import passport from "passport";
import { LoginwithMail } from "../Controller/Login.Controller.js";



const router = Router()

router.route('/send-mail').get(LoginwithMail)
import { sendOtp, VerifyOtp } from "../Controller/Login.Controller.js";

import { GooleLogin } from "../Controller/Login.Controller.js";





router.route('/auth/google/callback').get(passport.authenticate('google',{
    successRedirect:'/dasboard',
    failureRedirect:'/login'
}),GooleLogin)

export default router
