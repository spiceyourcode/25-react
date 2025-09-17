import { useEffect, useState } from "react";

function LoadMoreData() {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [imageLink, setImageLink] = useState('')

    async function fetchProducts(params) {
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const result = await response.json();
            console.log(result)

            setImageLink(result.products[0].images[0])
        
            
        } catch (error) {
            console.log(e);

        }
    }
    useEffect(() => {
        fetchProducts()
    }, [imageLink])
    return (
        <>
            <div className="container">
                <img src={imageLink} alt="" />
            </div>
        </>
    );
}

export default LoadMoreData;