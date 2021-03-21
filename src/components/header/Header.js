import React from 'react'
import {Logo, Profile} from '../../assets/index';

export const Header = () => {
  return (
    <div className="header__container">
      <div className="header__container__block">
        <div className="header__logo">  
          <img src={Logo} alt="logo"/>
          <p>Walter<span>CMS</span></p>
        </div>
        <div className="header__profile">
          <img src={Profile} alt="profile"/>
        </div>
      </div>
     
    </div>
  )
}
