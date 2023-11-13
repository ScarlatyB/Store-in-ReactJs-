import styled from "styled-components";



export const Container = styled.div`
 
  .mySwiper{
    width: 100%;
    height: 800px;
    margin-top: -7%;  
}
  img{
    width: 100%;
    height: 1216px;
    padding-left: 50px; 
}
  .swiper-button-prev{
    margin-left: 95px;

}

  @media (max-width: 414px){
    .mySwiper{
      width: 100%;
      height: 786px;
      margin-top: -28%;

  img{
    height: 474px;
} 
  .swiper-button-prev{
    margin-top: -160px;
}
  .swiper-button-next{
    margin-top: -160px;
    margin-left: 106px;
}
    
}
}
.swiper-pagination-horizontal{
  margin-left: 45px;
  color: white;
  font-weight:bolder;

  @media (max-width: 414px){
    margin-left: 45px;
    margin-bottom: 303px;
    color: white;
  }
}


`;


