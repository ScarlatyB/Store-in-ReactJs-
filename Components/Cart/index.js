import React, { useContext } from "react";
import { Cartcontext } from "../../Context";
import * as S from "../Cart/styled";




const Card = () => {
    const Globalstate = useContext(Cartcontext);
    const state = Globalstate.state;
    const dispatch = Globalstate.dispatch
   
   
    return ( 
     
     <div>
       <S.CardContainer>
      {state.map((product, index)=>{
      return (
         <div className="card" key={index}>  
          <img src={product.image} alt=""/>
          <p>{product.title}</p>
          <p>{product.quantity * product.price}</p>
          <div className="quantity">
          <button className="add-btn" onClick={()=>dispatch({type:'INCREASE',payload:product})}>+</button>
          <p>{product.quantity}</p>
          <button className="del-btn"
           onClick={()=>
            {
            if(product.quantity > 1){
              dispatch({type:'DECREASE',payload:product}) 
              
            }else{
              dispatch({type:'REMOVE',payload:product})
            }
          
          }}>
          -
          </button>
          </div>
          <h2 className="x-btn" onClick={()=>dispatch({type:'REMOVE',payload:product})}>X</h2>
          </div>
      );
      })}
      </S.CardContainer>
    </div>
    );
 };

export default Card;