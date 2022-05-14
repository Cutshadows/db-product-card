import { ReactElement } from "react";
import { IProps as IPropsButton } from "../components/ProductButtons";
import { Props as PropsImage } from "../components/ProductImage";
import { Props as PropsTitle } from "../components/ProductTitle";

export interface ProductCardProps {
	// children?: ReactElement | ReactElement[];
	children: (args:ProductsCardHandlers) => JSX.Element;
	className?: string;
	product: Product;
	style?: React.CSSProperties;
	onChange?: (args: onChangeArgs)=>void;
	value?: number;
	initialValues?: InitialValues;
}

export interface Product {
	id: string;
	img: string;
	title: string;
}

export interface ProductState {
	counter: number;
	maxCount?: number;	
	product: Product;
	increaseBy: (value: number) => void;
}
export interface IProductContextProps { 
	ProductState: ProductState
}


export interface ProductCardHOCProps {
	({children, product}: ProductCardProps): JSX.Element,
	Title: (Props: PropsTitle)=> JSX.Element,
	Buttons: (Props: IPropsButton)=> JSX.Element,
	Image: (Props: PropsImage)=> JSX.Element,
}

export interface onChangeArgs {
	product: Product;
	count: number;
}

export interface InitialValues {
	count?: number;
	maxCount?: number;
}

export interface ProductsCardHandlers {
	count: number;
	isMaxCountReached: boolean;
	maxCount?: number;
	product: Product;
	increaseBy: (value: number) => void;
	reset: () => void;
}