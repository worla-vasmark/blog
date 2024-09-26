import React from 'react'
import { auth, provider } from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'

const login = () => {

  const signinWithGoogle = () => {
    
  }
  return (
    <div className='loginPage'>
      <p>Sign In With Goggle to Continue</p>
      <button className='login-with-goggle-btn'>Sign in with Goggle</button>
    </div>
  )
}

export default login