
import React, { useState } from "react";
import * as S from "./styled";
import { Link } from "react-router-dom";
import {FaRegHeart, FaShoppingCart} from 'react-icons/fa'
import  { useContext } from "react";
import { Cartcontext } from "../../Context";



const Header = ( ) => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch
  const [color, changeColor] = useState("#ced4da");
  document.body.style.backgroundColor = color;
  
  return (
    <div>
    
      <S.Container>
      
      {/* O svg logo que está no header */}
      <S.Title>
        <img src= "images/brand.svg" alt="brand" className="brand"/>
      </S.Title>
     
      {/* O diamante que está no header */}
      <S.Image>
        <img src="/images/diamond2.png" alt="Logo da marca" className="diamond"/>
      </S.Image>
      
      <S.Header>
        <ul>
            <li>
              <Link to =  "/"  onClick={() => changeColor("#ced4da")}>Home</Link>
            </li>
            
            <li>
              <Link to = "/shope" onClick={() => changeColor("#f1faee")}>Shope</Link>

            </li>
            
            <li>
            <Link to = "/about-us" onClick={() => changeColor("#22223b")}>About Us</Link> 
              </li>
            
            <li>
            <Link to = "/contact"  onClick={() => changeColor("#22223b")}>Contact</Link> 
              </li>
          </ul>
          </S.Header>
          
          {/* Os ícones que estão no header */}
          <S.Icones> 
          <span className="Icon1"><FaRegHeart/></span>
          
          
         
        <Link to = "/Cart" onClick={() => changeColor("#f1faee")}>
        {/* {state.map((product, index)=>{
            return (
            <div className="Cart" key={index}> 
            if(ICREASE)
            <span className="cart-item" >{product.quantity = product.quantity +0}</span>
            
            </div>
        
      ); */}
{/* 
      })} */}
       <span  className="Icon2"><FaShoppingCart/></span>
        </Link> 
          
        </S.Icones>

          </S.Container>

    


    </div>
  );
};

export default Header;
