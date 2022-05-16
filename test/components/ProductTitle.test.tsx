import React from 'react';
// import TestRenderer from 'react-test-renderer';
import * as renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components/';
import { product1, product2 } from '../data/products';

const products = [product1, product2];
describe('ProductTitle', () => {
  test('should view the component with custom title', () => {

        const wrapper = renderer.create(
            <ProductTitle  title="Custom Props" className='custom-class' />
        ).toJSON();

        expect(wrapper).toMatchSnapshot();
  });

  test('should view the components with the name of product', () => {
    const wrapper = renderer.create(
        <ProductCard product={products[1]} >
            {
                ()=> (
                    <ProductTitle title={''} />
                )
            }
        </ProductCard>
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
   });
});
