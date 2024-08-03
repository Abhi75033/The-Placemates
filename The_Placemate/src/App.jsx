import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'


function App() {
  
  const googleLogin = ()=>{
    window.open('http://localhost:3000/api/v1/login/auth/google/callback',"_self")
  }

  const logout = async()=>{
    window.open('http://localhost:3000/logout',"_self")
  }


  const getdata = async()=>{
    try {
      const resp = await axios.get('http://localhost:3000/success',{withCredentials:true})
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  }

useEffect(()=>{
  getdata()
})

  return (
    <>
    <button onClick={googleLogin}>Login with google</button>
    <button onClick={logout} >Logout</button>
    </>
  )
}

export default App
