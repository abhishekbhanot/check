import React from 'react'
import image from '../Images/logo-mcm.png'

export default function Navbar() {
  return (
   <>
   <nav id="nav">
   <i class="fa-solid fa-envelope"></i> 
 <p>info1234@hellodigitalindia.com</p>
 <i class="fa-solid fa-phone"></i>
 <p>+919975554765
 </p>
 <button id="but">
 <i class="fa-solid fa-user" ></i> Student Login
 </button>
 <button id="but">
 <i class="fa-solid fa-house"></i> Admin Login
 </button>
   </nav>
   <div id='firstimage'>
    <img  src={image} alt='' />
   </div>
   <header id='header'> 
    <li> <i class="fa-solid fa-house"></i>Home</li>
    <li><i class="fa-solid fa-eject"></i>About</li>
    <li><i class="fa-solid fa-paper-plane"></i>Course</li>
    <li><i class="fa-solid fa-palette"></i>Hello</li>
    
   </header>
   
   
   </>
  )
}
