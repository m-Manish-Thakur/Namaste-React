import { useEffect, useState } from "react"


const useGetProduct = (id) => {

    const [product, setProduct] = useState();

    useEffect(()=>{
        fetchProduct();
    }, [])

    const fetchProduct = async () =>{
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data)
    }
    
    return product;
}

export default useGetProduct