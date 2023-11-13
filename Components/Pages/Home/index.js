import React from "react";
import Slider from "../../Slider";
import * as S from "./styled";
import { Link } from "react-router-dom";
import Slider2 from "../../Slider2/index"




const Home = () =>{
    
    return(
    <div>
      <S.Container>
        <S.Container2>
          <h1 className="h11">48h flash sale</h1> 
          <h2>Exclusive Offer  -40% this week!</h2>
          <h1>Sale!</h1>   
          <p>plus free shipping!</p>   

        <Link to="/Shope">
          <button className="btn">Shop now</button> 
        </Link>
        
        </S.Container2>
        <Slider/>

        </S.Container>
        
        <Slider2/>
      
      

      {/* <Link to =  "/"  onClick={() => changeColor("#ced4da")}>Home</Link> */}


     </div>
    
     
    )
}


export default Home;

