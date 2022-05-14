import { useContext } from 'react';
import styles from '../styles/styles.module.css';
import imgPython from '../assets/scope_python.webp';
import { ProductContext } from './ProductCard';
import React from 'react';

export interface Props {
	img?: string; 
	className?: string;
	style ?: React.CSSProperties;
}

export const ProductImage = ({ img, className, style }: Props) : JSX.Element => {
	const {ProductState} = useContext(ProductContext);
	const {product} = ProductState;
	
	return (
		<img style={style} src={img || product!.img ||imgPython} alt={img} className={`${styles.productImg} ${className}`} />
	);
};