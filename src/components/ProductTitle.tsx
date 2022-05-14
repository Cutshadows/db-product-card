import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';
import React from 'react';

export interface Props { 
	title: string; 
	className?:string;
	style?: React.CSSProperties; 
}


export const ProductTitle = ({ title, className, style }: Props) =>{
	const {ProductState} = useContext(ProductContext);
	const {product} = ProductState;


	return(
		<span className={`${styles.productDescription} ${className}`} style={style}>{!title?product.title : title}</span>
	);
};