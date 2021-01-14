//import { Alert } from 'bootstrap';
import { Fragment, useState } from 'react';
import Product from './Product.js';
import Alert from './Alert.js';


function Products (props){
    const [message, setMessage] =useState(null);
    function onAlertClose(){
        setMessage(null);
    }

    function onProductEdit(product) {
        setMessage(product.name);
        
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
                {props.products.map((product)=>
                    <Product key={Product.name} product={product} onEdit={onProductEdit}/>
                )}
            </tbody>
            </table>

        </Fragment>
        
    )
}

export default Products;