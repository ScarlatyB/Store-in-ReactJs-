import styled from "styled-components";


export const Container = styled.footer`
  background-color:#6c757d;
  margin-top: 500px;
  height:130px;
  width: 100%;

  @media (max-width: 375px) {
    padding-top: 25px;
    padding-right: 127px;
    padding-bottom: 10px;
}

  .btn{
    color:white;
    width:100px;
    height: 20px;
    background-color:black
}
`;

export const RedesSociais = styled.div`
  padding-top:25px;
  margin-left: -75px;

  .Icon1{
    color: #e09f3e;
    margin-left: 45%;
    padding-right:20px; 

  svg{
    width: 25px;
    height: 25px;
}
}

  .Icon2{
    color: #e09f3e;
    padding-right:20px; 
  svg{
    width: 25px;
    height: 25px;
  }
}

  .Icon3{
    color: #e09f3e;
    padding-right:20px; 
  
  svg{
    width: 25px;
    height: 25px;
  }
}
  @media (max-width: 375px){
    padding-top: 25px;
    padding-right: 119px;
    padding-bottom: 10px;
  
  }
  
`;

export const Sobre = styled.div`
  opacity: 0.5;
  
  footer{
    color: #5a189a;
    margin-left: 18%;
    margin-top:20px;
    font-size:12px;
}
  .form{
    margin-left: 14px;
  }

  @media (max-width: 375px) {
  .footer{
    color: #eee;
    margin-left: 13%;
    margin-top: 19px;
    font-size: 15px;
}
}
`;