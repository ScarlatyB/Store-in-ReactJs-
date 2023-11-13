import styled from "styled-components";


//Container com o conteúdo da Header
export const Container = styled.div`
  height: 130px;
  text-align: center;
  background: #212529;
  border-bottom: 1px solid #e9ecef;
  width: 100%;
  padding-bottom: 65px;
  margin-top: 0px;
  padding-top: -25px;

`;
export const Image = styled.div `
  .diamond{
    width:85px;
    height: 85px ;
    margin-left: -620px;
    margin-top: -48px;
    color: white;
      
  }
`;
  /* brand dentro do header */
export const Title = styled.div `
  height:100px;
  width: 100px;
  
  .brand {
    cursor: pointer;
    padding-bottom: 10px;
    margin-left: -6px;
    height: 300px;
    width: 300px;
    margin-top: -56px;
    
  }
  
  @media (max-width: 414px){
  .brand{
    cursor: pointer;
    margin-left: 54px;
    width: 236px;
    margin-top: -77px;
    }
  }

  

`;
//O p que envolve o Title do Header
export const Header = styled.div`
  background-color: #edf6f9;
  margin-top: 40px;
  height: 30%;
  padding-top: 12px;
  margin-left: -30px;
  a{
  text-decoration: none;
  }

  ul li{
    color: #000000;
    display: inline;
    word-wrap: break-word;
    padding-left: 45px;
    text-transform: uppercase;
    font-size: 25px;
    font-weight: bold;

  ul li a:hover{
    background-color: #8d99ae;
    cursor: pointer;
  }
    
}

  @media (max-width: 414px){
    background-color: #e0e1dd;
    margin-top: 16px;
    height: 28%;
    width: 107%;

  ul li{
    color: black;
    text-shadow: 1px 1px 2px #f9c74f;
    display: inline;
    word-wrap: break-word;
    padding-left: 20px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 17px;
    }
  }


  
`;

export const Icones = styled.div`
  margin-top:-180px;
  .Icon1{
    color: #e09f3e;
    margin-left: 70%;
    margin-right:80px;
  svg{
    width: 25px;
    height: 25px;
  cursor: pointer; 
  
  }

  @media (max-width: 414px) {
  svg{
    width: 30px;
    height: 22px;
    cursor: pointer;
    margin-left: -271px;
    margin-top: 20px;
    margin-right: -48px; 
    color: #e09f3e;
  }
  }
} 
  .Icon2{
    color: #e09f3e;
    padding-right:20px; 
  svg{
    width: 25px;
    height: 25px;
    cursor: pointer; 
    
  }

}

.cart-item{
    background-color: crimson;
    font-weight: bold;
    padding: 4px;
    border-radius: 28%;
    position: absolute;
    margin-left: 19px;
    margin-top: -19px;
}
   

  @media (max-width: 414px){
  .Icon1{
    color: #e09f3e;
    margin-left: 75%;
    margin-right:80px;
    svg{
    width: 25px;
    height: 25px;
    cursor: pointer;
    margin-top: 90px; 
    
    }
  }

}

  `;



