import React from "react";
import * as S from "./styled";
import {FaFacebook, FaInstagram, FaTwitter,} from 'react-icons/fa'



const Footer = () =>{
  const currentYear = (new Date().getFullYear())
  const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+currentYear
    return(
    <div>
    <S.Container>
  
      <S.RedesSociais>
    
        <span className="Icon1"><FaFacebook/></span>
        <span className="Icon2"><FaInstagram/></span>
        <span className="Icon3"><FaTwitter/></span>
      
      </S.RedesSociais>
    
    <S.Sobre>
    <form className="form">
    <label className="label"> Email: <input type="email" name="Email" /> </label>
    <input type="submit" value="Submit" className="btn"/>
    
    </form>
  
    <footer className ="footer">
  © { yearTxt } Service - Developed by Scarlaty
    </footer>
    
    </S.Sobre>
  
  </S.Container>
    </div>
    
    
    )
}


export default Footer;

