import { createContext, Fragment} from 'react';
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { ProductCardProps } from '../interface/Product.dto';
import React from 'react';



export const ProductContext = createContext({ ProductState: { counter: 0, product: { id: '', title: '', img: 'https://w7.pngwing.com/pngs/364/982/png-transparent-python-programming-language-computer-programming-language-angle-text-computer-thumbnail.png' },  maxCount: 10, increaseBy: ( _value: number ):void => {} } });
const { Provider } = ProductContext;










export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: ProductCardProps) => {

	const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct( {onChange, product, value, initialValues} );

	return (
		<Fragment>
			<Provider value={{
				ProductState:{
					counter,
					maxCount,
					increaseBy,
					product,
				}
			}}>
				<div className={`${styles.productCard } ${className}`} style={style}>
					{ children({
						count: counter,
						isMaxCountReached,
						maxCount: initialValues&&initialValues.maxCount,
						product,
						increaseBy,
						reset

					}) }
				</div>
			</Provider>
		</Fragment>
	);
};


