//import { Alert } from 'bootstrap';
import { Fragment, useState } from 'react';
import Alert from './Alert.js';
import NewProduct from './NewProduct.js';
import EditableProduct from './EditableProduct.js';

function Products (props){
    const [message, setMessage] =useState(null);
    const [products, setProducts]= useState(props.products);
    
    function onAlertClose(){
        setMessage(null);
    }

    function onProductEdit(newProduct, oldProduct) {
        const validation=validateProductName(newProduct);
        if(!validation){
            return false;
        }
        
        if(newProduct.name !==oldProduct.name){
            setMessage('Cannot change the name');
            return false;
        }

        setProducts((prevProducts)=>{
            const newProducts= prevProducts.map((c)=> c.name=== oldProduct.name ? newProduct : c);            
            return newProducts;
        })
        
        return true;
    }

    function onProductDelete(product){
        setProducts((prevProducts)=>{
            return prevProducts.filter((c)=>c.name !== product.name);
        });
    }

    function validateProductName(product){
        if(product.name===''){
            setMessage('You have to introduce the name of the product');
            return false;

        }
        return true;       
    }

    function onAddProduct(product) {
        
        const validation= validateProductName(product);
        if(!validation){
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
                    <EditableProduct key={product.name} product={product} onEdit={(newProduct)=>onProductEdit(newProduct, product)} onDelete={onProductDelete}/>
                )}
            </tbody>
            </table>

        </Fragment>
        
    )
}

export default Products;