import { useEffect, useState } from "react";
import styles from './LoadMoreData.module.css'
function LoadMoreData() {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);


    async function fetchProducts() {
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const result = await response.json();

            if (result && result.products && result.products.length) {
                setProducts([...products, ...result.products]);
                setLoading(false);
            }


        } catch (error) {
            console.log(e);
            setLoading(false);

        }
    }
    useEffect(() => {
        fetchProducts()
    }, []);

    if (loading) {
        return <div> Loading Data....</div>
    }
    return (
        <>
            <div className={styles.container}>
                {
                    products && products.length ?
                        <div className={styles['product-container']}>
                            {products.map(
                                item => <div className={styles.product} key={item.id}>
                                    <img src={item.thumbnail} alt={item.title} />
                                    <p>{item.title}</p>
                                </div>
                            )}
                        </div>
                        : null
                }
                <button onClick={() => {
                    setCount(count + 1);
                    fetchProducts();
                }}>Load More</button>
            </div>
        </>
    );
}

export default LoadMoreData;