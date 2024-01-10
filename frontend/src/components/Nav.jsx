import  { useState } from 'react'
import './Nav.css'
import {  useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

const Nav = () => {
  
  const navigate = useNavigate();
  const usersingout = ()=>{
    signOut(auth)
    .then(()=>{
        console.log('signed out')
      
        localStorage.clear();
        navigate('/')
    }).catch((e)=>{
        console.log(e)
    })
}
  return (
    <div className='nav'>
      <h1>RunMeQuick</h1>

      {
        localStorage.getItem('loggedin') && 
        <button onClick={usersingout} className='btn'>Signout</button>
        

      }
    </div>
  )
}

export default Nav
