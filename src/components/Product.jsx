

import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"

const Product = () => {
    const [product, setProduct] = useState({})
    const {productID}= useParams()

    useEffect(()=> {
        const getProduct= async () =>{
            try {
                const response= await fetch(`https://fakestoreapi.com/products/${productID}`)
                const result = await response.json()
                setProduct(result)
        
            } catch (error) {
                console.error(error)
            }
        }
        getProduct()
    }, [])


    return (
      <div>
        <p>Product Page</p>
      
       </div>
    )
  }
  
  export default Product