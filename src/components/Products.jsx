import {useEffect, useState} from "react"

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(()=> {
        const getProducts= async () =>{
            try {
                const response= await fetch('https://fakestoreapi.com/products')
                const results = await response.json()
                setProducts(results)
        
            } catch (error) {
                console.error(error)
            }
        }
        getProducts()
    }, [])


    return (
      <div>
        <p>Products Page</p>
        {!!products.length && products.map(item =>{
            return(
                <div key={item.id}>
                <p>{item.title}</p>
            </div>
            )

        })}
       </div>
    )
  }
  
  export default Products