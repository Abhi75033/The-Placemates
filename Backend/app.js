import express, { json, urlencoded } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
// import express from 'express';
import session from 'express-session';

import passport from 'passport';
import oauthStartergy from 'passport-google-oauth2'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'







const app = express()
dotenv.config()

const Auth = oauthStartergy.Strategy;

const cliendId = process.env.CLIENTID
const client_Secrect = process.env.CLIENT_SERECT




app.use(session({
    secret: 'IJ*?co#5oTQCgdf@werd', // Replace with a long random string
    resave: false,
    saveUninitialized: true
  }))

  //Passport initialization


app.use(session({
    secret: 'IJ*?co#5oTQCgdf@werd', // Replace with a long random string
    resave: false,
    saveUninitialized: true
  }))

  //Passport initialization

app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(session())
app.use(passport.initialize())
app.use(passport.session())


// Routers
import LoginRouter from './src/routes/Login.routes.js'
import { Login } from './src/Model/Login.model.js';


app.use('/api/v1/login',LoginRouter)

passport.use(
  new Auth({
      clientID:cliendId,
      clientSecret:client_Secrect,
      callbackURL:'/auth/google/callback',
      scope:["profile","email"]
  },
  async(accessToken,refreshToken,profile,done)=>{
      try {
          // console.log(profile)
       let user = await Login.findOne({googeleId:profile.id})
       
       if (!user) {
        user = new Login({
          googeleId:profile.id,
          Name:profile.displayName,
          email:profile.emails[0].value,
          image:profile.photos[0].value
        })
       }

       await user.save()


          
          return  done(null,user)

      } catch (error) {
          return done(null,error)
      }
  }
)
)

passport.serializeUser((user,done)=>{
  done(null,user)
})
passport.deserializeUser((user,done)=>{
  done(null,user)
})


app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}))


app.get('/auth/google/callback',passport.authenticate("google",{
  successRedirect:'http://localhost:5173/',
  failureRedirect:'http://localhost:5173/login'
}
))

app.get('/success',(req,res,next)=>{
 if (req.user) {
  const accessToken = jwt.sign({id:req.user._id},process.env.ACCESS_TOKEN_SECRECT,{expiresIn:'2d'})
 
  res.cookie('accessToken',accessToken)
   res.status(200).json({message:'user Logedin',user:req.user})
 }else{
  res.status(400).json({message:'Uauth Access'})
 }
})

app.get('/logout',(req,res,next)=>{
  req.logout((error)=>{
    if (error) return next(error)
      res.clearCookie('accessToken')
      res.redirect('http://localhost:5173')
  })
})



// Routers
import LoginRouter from './src/routes/Login.routes.js'
import { Login } from './src/Model/Login.model.js';


app.use('/api/v1/login',LoginRouter)

passport.use(
  new Auth({
      clientID:cliendId,
      clientSecret:client_Secrect,
      callbackURL:'/auth/google/callback',
      scope:["profile","email"]
  },
  async(accessToken,refreshToken,profile,done)=>{
      try {
          
       let user = await Login.findOne({googeleId:profile.id})
       
       if (!user) {
        user = new Login({
          googeleId:profile.id,
          Name:profile.displayName,
          email:profile.emails[0].value,
          image:profile.photos[0].value
        })
       }

       await user.save()


          
          return done(null,user)

      } catch (error) {
          return done(null,error)
      }
  }
)
)

passport.serializeUser((user,done)=>{
  done(null,user)
})
passport.deserializeUser((user,done)=>{
  done(null,user)
})


app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}))


app.get('/auth/google/callback',passport.authenticate("google",{
  successRedirect:'http://localhost:5173/dashboard',
  failureRedirect:'http://localhost:5173/login'
}
))

app.get('/success',(req,res,next)=>{
 if (req.user) {
   res.status(200).json({message:'user Logedin',user:req.user})
 }else{
  console.log(req.user);
  res.status(400).json({message:'Uauth Access'})
 }
})

app.get('/logout',(req,res,next)=>{
  req.logout((error)=>{
    if (error) return next(error)
      res.redirect('http://localhost:5173')
  })
})



export {app}
