## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'js-product-card'

```


```
 <ProductCard 
    key={product.id}  
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

```
