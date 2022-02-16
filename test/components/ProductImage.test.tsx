import React from 'react';
import renderer from 'react-test-renderer'
import { ProductImage, ProductCard } from '../../src'
import { product2 } from '../data/products';

describe('ProductImage', () => {
    test('debe de mostrar el componente correctamente con la imagen dada', () => {
        const wrapper = renderer.create(
            <ProductImage img='./coffee-mug.png'/>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();  
    })

    test('debe de mostrar el componente con la imagen del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>  
        )
        expect(wrapper.toJSON()).toMatchSnapshot();  
    })
})