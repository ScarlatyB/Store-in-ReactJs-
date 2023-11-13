import styled from "styled-components";


export const Container = styled.div`

  margin-top: 149px;
  margin-left: -100px;
  margin-bottom: -250px;
  position: relative;
  padding-left: -100px;
`;

export const Container2 = styled.div`
  position: absolute;
  z-index: 3;
  top: 70%;
  left: 25%;
  transform: translate(-50%, -50%);
  opacity: 0.7;
  
  h1{
    font-size:100px;
    color: green;
    margin-left: 0px;
}
  h2{
    margin-left: 0px;
    color: white;
}

  .img{
    width:918px;
    margin-top:-101px;
}
  .h11{
    font-size:46px;
    color: red;
    text-transform: uppercase;
    margin-left: -6px;

}
  p{
    font-size: 25px;
    color: white;
}
  .btn {
    width: 300px;
    height: 60px;
    border-radius:2px;
    font-size: 30px;
    color: white;
    background-color: black;
    text-transform: uppercase;
    cursor: pointer;
    border-color: white;
    margin-top: 50px;
    margin-left:-20px;
}
  .btn:hover{
    background-color: white;
    color: black;
    opacity: none;
    border-color: black;
}

 //no celular
  @media (max-width: 414px){
    position: absolute;
    z-index: 3;
    top: 70%;
    left: 25%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    opacity: 0.7;

  
  .h11{
    font-size: 36px;
    margin-left: 206px;
    margin-top: -453px;

}
  h2{
    margin-left: 208px;
    font-size: 21px;

}
  h1{
    font-size: 68px;
    margin-left: 199px;

  }
  
  p{
    font-size: 19px;
    margin-left: 204px;
  }
  .btn{
    width: 193px;
    height: 59px;
    border-radius: 16px;
    font-size: 19px;
    margin-top: 24px;
    margin-left: 195px;
  }
}

`;

