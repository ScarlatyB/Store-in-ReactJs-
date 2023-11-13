import React, {useState, useEffect, useContext}from "react";
import * as S from "./styled"
import Loading from "../Loading/index"
import { Cartcontext } from "../../Context";



    const Products = () =>{
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
      .then(res=>{
        if(res.ok){
            return res.json()
        }
        throw res;
      }).then(data =>{
        setData(data)
      }).catch(error=>{
        console.error("Error fetching data:", error)
        setError(error)
      }).finally(() => {

        setLoading(false)       
    }) },[])

    const Globalstate = useContext(Cartcontext);
    const dispatch = Globalstate.dispatch;
    console.log(Globalstate)

    if (loading) return <Loading/>;
    if(error) return "Error!";

   

    return (
      <S.products_card>
      <div className="home">
        {data.map((product, index) => {
          product.quantity = 1;
          return (
            <div className="card" key={index}>
              <img src={product.image} alt="" />
              <p>{product.title}</p>
              <h3>$. {product.price}</h3> 
              <button className="btn-add" onClick={() => dispatch({ type: "ADD", payload: product })}>
                add to cart
              </button>
            </div>
          );
        })}
      </div>
      </S.products_card>
    );


}
  





export default Products;