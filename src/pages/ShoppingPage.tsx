import React, { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { products } from '../data/products'
import '../styles/custom-styles.css'

const product = products[0]

export const ShoppindPage = () =>{
    return (
        <div>
            <h1>Shoppieng Page</h1>
            <hr/>
                <ProductCard 
                    product={product}
                    initialValues={{
                        count: 2,
                        maxCount: 10 
                    }}
                >
                    {
                        ({ reset, increaseBy, count, isMaxCountReached, maxCount }) => (
                            <>
                                <ProductImage />
                                <ProductTitle />
                                <ProductButtons />
                            </>
                        )
                    }
                </ProductCard>

        </div>
    )
}