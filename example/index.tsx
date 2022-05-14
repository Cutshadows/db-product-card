import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: './Coffe-mug.png'
}

const App = () => {
  return (
    <>
      <ProductCard 
     product={product}
     className="bg-dark text-white"
     initialValues={{
      count: 4,
      maxCount: 10
     }}
    >
     {
      ({reset, increaseBy, count, maxCount, isMaxCountReached})=> (
       <>
        <ProductCard.Image 
         img={product.img} 
         className="custom-image" 
        />
        <ProductCard.Title 
         title={product.title} 
         className="text-white text-bold"
        />
        <ProductCard.Buttons 
         className="text-white custom-buttons"
        />

        <button onClick={reset} >Reset</button>
        <button onClick={()=>increaseBy(+2)} >Incrementar +2</button>
        {
         isMaxCountReached && <button onClick={()=>increaseBy(-2)} >Decrementar -2</button>
        }
        
        <span >Count: {count} - MaxCount: {maxCount}</span>
       </>
      )
     }
    </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
