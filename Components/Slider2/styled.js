import styled from "styled-components";



export const Container = styled.div`
  margin-bottom: -450px;
  
  .mySwiper{
    width: 100%;
    height: 500px;
    margin-top: 200px;
    opacity: none;
  
}
  img{
    width: 115%;
    height: 379px;
    border: 1px solid #adb5bd;
    margin-top: 121px;
}

  @media (max-width: 414px){
    .mySwiper{
      width: 100%;
      height: 466px;
      margin-top: 233px;
  
}
.swiper-pagination-horizontal{
    bottom: 153px;
    width: 98%;
}
}
`;

export const Header2 = styled.div`
  width: 100%;
  height: 5px;
  
  h1{
    background-color: #000000;
    color: white;
    font-size: 30px;
    text-transform: uppercase;
    padding-left: 35%;
    padding-bottom: 21px;
    padding-top: 15px;
  
  }
  
  @media (max-width: 414px){
    h1{
      font-size: 20px;
      padding-left: 13%;
      padding-bottom: 10px;
      padding-top: 10px;

}

}

`;
