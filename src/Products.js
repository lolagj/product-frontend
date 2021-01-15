//import { Alert } from 'bootstrap';
import { Fragment, useState } from 'react';
import Product from './Product.js';
import Alert from './Alert.js';
import NewProduct from './NewProduct.js';

function Products (props){
    const [message, setMessage] =useState(null);
    const [products, setProducts]= useState(props.products);
    
    function onAlertClose(){
        setMessage(null);
    }

    function onProductEdit(product) {
        setMessage(product.name);
        
    }

    function onAddProduct(product) {
        if(product.name===''){
            setMessage('You have to introduce the name of the product');
            return false;
        }

        if(products.find(c=> c.name=== product.name)){
            setMessage('Duplicated product');
            return false;
        }



        setProducts((prevProducts)=>{
            if(!prevProducts.find(c=>c.name ===product.name)){
                return [...prevProducts, product]; //De esta forma cogemos la lista y añadimos el nuevo producto

            }else{
                setMessage('Duplicated produtc');
                return prevProducts;
            }
            
        });

        return true;
        
    }
    return(
        <Fragment>
            <Alert message={message} onClose={onAlertClose}/>
            <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>

                <NewProduct onAddProduct={onAddProduct}/>
                {products.map((product)=>
                    <Product key={Product.name} product={product} onEdit={onProductEdit}/>
                )}
            </tbody>
            </table>

        </Fragment>
        
    )
}

export default Products;