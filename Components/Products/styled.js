import styled from "styled-components";


export const products_card = styled.div`
  .home{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 103px;
    gap: 150px;

    @media (max-width: 414px) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    padding: 2px;
    gap: 2px;
    width: 374px;
    }
  }
  .card{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: transparent;
    border-style: solid;
    border-width: 4px 4px 4px 4px;
    border-color: white;
    border-radius: 0.3rem;
  }
  img{
    width: 100%;
    max-height: 300px;
    
    @media (max-width: 414px) {
    width: 138px;
    height: 147px;
    margin-left: 11px;
    margin-right: 11px;
    }
    
  }

  @media (max-width: 414px) {
    display: grid;
    grid-template-columns: repeat(2, 0fr);
    justify-content: center;
    padding: 10px;
    padding-top: 22px;
    
}

  img{
    width: 250px;
    height: 250px;
  
  @media (max-width: 414px) {
    width: 143px;
    height: 155px;
    margin-left: 15px;
    
}
}

  img:hover{
    transform: scale(1.1);
  
    @media (max-width: 414px) {
    transform: none;
    }
}

  .card{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 20px 0;
}

  .card-description{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    color: white;
  }
  .title{
    color: pink;
    size:12px;
    margin-left:5px;
}
  .btn-add{
    width: 40%;
    height: 31px;
    background: #001219;
    color: white;
    border: none;
    cursor: pointer;
}



`
