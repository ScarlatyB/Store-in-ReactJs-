import styled from "styled-components";




export const Container = styled.div`
  margin-bottom: 100px;
  .titulo{
    color: white;
    font-size: 50px;
    margin-top: 200px;
    margin-left: 15%;
    margin-bottom: 100px;
    margin-bottom: -15px;
  
  }

  @media (max-width: 414px) {
    margin-bottom: 100px;
  .titulo{
    font-size: 31px;
    margin-top: 58px;
    margin-bottom: -37px;
  }
}
`;

export const Paragraph = styled.div`
  margin-left: 15%;
  margin-top: 50px;


  p{
    color: #f9dcc4;
    padding-top:10px;
    font-size:20px;
  }
@media (max-width: 414px) {
  margin-top: 100px;
  p{
    font-size: 15px
  }
}
`;

export const BackgroundImage = styled.div`

  img{
  margin-top:-200%;
  margin-left:30%;
  opacity:0.2;
  width: 600px;
  height: 600px;

}
  @media (max-width: 414px) {

}

`;

