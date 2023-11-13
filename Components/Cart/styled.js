import styled from "styled-components";


export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 128px;

    .card{
        display: flex;
        justify-content: space-between;
        align-items: center;
    
    }
    img{
        width: 40px;
        height: 40px;
    }
    p{
        width: 200px;
    }
    .quantity{
        display: flex;
        flex-direction: column;
        align-items: center;
      
    }
    .quantity p{
        width: 50px;
        text-align: center;
    }
    .quantity button{
        width: 35px;
        height: 24px;
        cursor: pointer;
    }
    .add-btn{
        background-color: #38b000;
        color: white;
        border: 1px solid black;
    }
    .del-btn{
        background-color: #d00000;
        color: white;
        border: 1px solid black;
    }
    .x-btn{
        cursor: pointer;
        font-size: 24px;
    }

    @media (max-width: 414px) {
        display: flex;
        align-items: center;
        margin: 20px 0;
        p{
            width: 134px;
        }

    
    }
`
