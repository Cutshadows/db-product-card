import React from 'react';
// import TestRenderer from 'react-test-renderer';
import * as renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { product1, product2 } from '../data/products';

const products = [product1, product2];
describe('ProductImg', () => {
  test('should view the component with custom image', () => {

        const wrapper = renderer.create(
            <ProductImage  img="http://hola.jpg" />
        ).toJSON();

        expect(wrapper).toMatchSnapshot();
  });

  test('should view the components with the name of product image', () => {
    const wrapper = renderer.create(
        <ProductCard product={products[1]} >
            {
                ()=> (
                    <ProductImage />
                )
            }
        </ProductCard>
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
   });
});
