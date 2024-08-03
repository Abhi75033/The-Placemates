
import { Router } from "express";
<<<<<<< HEAD
<<<<<<< HEAD
import passport from "passport";
import { LoginwithMail } from "../Controller/Login.Controller.js";



const router = Router()

router.route('/send-mail').get(LoginwithMail)
=======
import { sendOtp, VerifyOtp } from "../Controller/Login.Controller.js";
=======
import passport from "passport";
import { GooleLogin } from "../Controller/Login.Controller.js";


>>>>>>> ec7805a9 (Integrated googleauth successfully)

const router = Router()



<<<<<<< HEAD
>>>>>>> 7c9612f (Bakend Login setup has completed)
=======
router.route('/auth/google/callback').get(passport.authenticate('google',{
    successRedirect:'/dasboard',
    failureRedirect:'/login'
}),GooleLogin)
>>>>>>> ec7805a9 (Integrated googleauth successfully)

export default router