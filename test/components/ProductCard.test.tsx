import React from 'react';
// import TestRenderer from 'react-test-renderer';
import * as renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/';
import { product1, product2 } from '../data/products';

const products = [product1, product2];

const {act}= renderer;

describe('ProductCard', () => {
  test('should view the component with custom ProductCard', () => {

        const wrapper = renderer.create(
            <ProductCard product={product1} >
                {
                    ()=>(
                        <h1>Jola Component</h1>
                    )
                }
            </ProductCard>
        ).toJSON();

        expect(wrapper).toMatchSnapshot();
  });

  test('should increment to counter productCard', () => {
    const wrapper = renderer.create(
        <ProductCard product={products[1]} >
            {
                ({count, increaseBy})=> (
                    <>
                        <h1>Product Card</h1>
                        <span>{count}</span>
                        <button onClick={()=>increaseBy(+1)}>Incrementar</button>
                    </>
                )
            }
        </ProductCard>
    );


    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();

    act(()=>{
        (tree as any).children[2].props.onClick();
    })
    tree = wrapper.toJSON();
    expect((tree as any).children[1].children[0]).toBe('1');
   });
});
