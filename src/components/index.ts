import { ProductCard as ProductCardHOC } from './ProductCard';

import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductCardHOCProps } from '../interface/Product.dto';

export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';



export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {
	Title: ProductTitle,
	Buttons: ProductButtons,
	Image: ProductImage
});

export default ProductCard;