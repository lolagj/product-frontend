import {useState} from 'react';
import Product from "./Product.js";
import EditProduct from "./EditProduct.js";

function EditableProduct(props){

    const [isEditing, setIsEditing]= useState(false);
    
    function saveProduct(product){
        const result= props.onEdit(product);
        if(result){
            setIsEditing(false);
        }
    }

    var productRender;

    if(isEditing){
        productRender= <EditProduct product={props.product} onDelete={props.onDelete} onSave={saveProduct}/>;

    }else{
        productRender= <Product product={props.product} onDelete={props.onDelete} onEdit={()=> setIsEditing(true)}/>;
    }
    return productRender;
}

export default EditableProduct;