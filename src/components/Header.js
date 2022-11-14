import React from 'react'
import './Header.css' 
import teslaLogo from '../assets/teslaLogoSmall.svg'

const header = () => {
    return (
        <div className="header">
           <div className="header_logo">
            <img src={teslaLogo} alt="tesla logo"/>
            </div>

           <div className="header_center">
               <p>Model 3</p>
               <p>Model s</p>
               <p>Model x</p>
               <p>Model y</p>
               <p>Solar roof</p>
               <p>Solar Panel</p>
            </div> 

            <div className="header_right">
                <p>Shop</p>
                <p>Tesla Account</p>
            </div>
        </div>
    )
}

export default header
