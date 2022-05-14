import { useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';
import React from 'react';

export interface IProps {
	className?: string;
	style?: React.CSSProperties;
}

export const ProductButtons = ({className, style}: IProps) => {
	const {ProductState}= useContext(ProductContext);
	const{increaseBy, counter, maxCount} = ProductState;

	const isMaxReached=useCallback(
	  () => !!maxCount && counter === maxCount, 
	  [maxCount, counter]
	);
	

	return (
		<div className={`${styles.buttonsContainer} ${className}` } style={style}>
			<button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
				-
			</button>
			<div className={styles.countLabel}> {counter} </div>
			<button className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`} onClick={() => increaseBy(1)}>
				+
			</button>
		</div>
	);
};