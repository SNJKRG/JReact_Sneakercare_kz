import React from 'react'
import './LoginSignup.css'
import Checkbox from './Checkbox.jsx'
import imgs from "./Icons/Cart.svg"
import imgs2 from "./Icons/Profile.svg"
import imginsta from "./Icons/Instagram.svg"
import imgwhats from "./Icons/Whatsapp.svg"
import imgtg from "./Icons/Telegram.svg"
import imglinkedin from "./Icons/Linkedin.svg"
import imgbehance from "./Icons/Behance.svg"
     


export const LoginSignup = () => {

    function handleClick(){
        alert("Processing");
    }
  return (
    <div className='main-container'>
        <div className='sub-container'>
            <div className = 'header'>
                <p className="logo">Sneakercare_kz</p>
                <div className="header-icons">
                    <img src = {imgs} id = "header-icons-cart"></img>
                    <img src = {imgs2} id = "header-icons-profile"></img>
                </div>
                {/* <div className="underline"></div> */}
            </div>
            <div className="inputs">
                <p class = "text-sign-in">Sign in</p>
                <div className="input1">
                    <input type="text" name="" id = "text-input" placeholder='Your e-mail' />
                </div>
                <div className="input2">
                    <input type="text" name="" id = "text-input" placeholder='Your password' />
                </div>
                <p className="lost-password">Forgot Password?</p>
                <div className="sign-in-container">
                    <button id = "sign-in-button" onClick={handleClick}>Sign in</button>
                    <div className="login-container">
                        <p className="login-question">Have no account yet?</p>
                        
                        <a  id = "login-button" onClick={handleClick} href='#'>Sign Up</a>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="footer">
            <p className="footer-text">
                Алматы, Жетысу-2, дом 37, 05000
                <br>
                </br>
                rajimbekerik@gmail.com
                <br>
                </br>
                +7 (707) 900 50 45
                <div className='svgs-footer'>
                    <img className= "svgsFooter" src={imginsta}></img>
                    <img className= "svgsFooter" src={imgwhats}></img>
                    <img className= "svgsFooter" src={imglinkedin}></img>
                    <img className= "svgsFooter" src={imgtg}></img>
                    <img className= "svgsFooter" src={imgbehance}></img>
                </div>
            </p>
        </div>
    </div>
  )
}
