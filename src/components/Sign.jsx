//sign in to app
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import SignUp from './SignUp'

const Sign = () => {
  return (
    <>
        <div>Sign</div>
        <form action="">
            <label htmlFor="">Sign In</label>
            <input type="text" placeholder='Enter your email'/>
            <input type="submit" value="Submit" />
        </form>
        <button>Forgot Password</button>
        <link href='SignUp.jsx'><p>Sign Up</p></link>
            
    </>
  )
}

export default Sign