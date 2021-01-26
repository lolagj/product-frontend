import { useState } from "react";

function EditProduct(props){
  

    const [code, setCode]= useState(props.product.code);
    const [name, setName]= useState(props.product.name);
    const [description, setDescription] = useState(props.product.description);
    const [category, setCategory] = useState(props.product.category);
    const [price, setPrice] = useState(props.product.price);
    const [amount, setAmount] = useState(props.product.amount);
    const [provider_name, setProvider_name]= useState(props.product.provider_name);
    const [provider_cif, setProvider_cif]= useState(props.product.provider_cif);
    return(
        
        <tr>
            <td><input className="form-control" name="code" value={code} onChange= {(event)=>setCode(event.target.value)}/></td>
            <td><input className="form-control" name="name" value={name} onChange= {(event)=>setName(event.target.value)}/></td>
            <td><input className="form-control" name="description" value={description} onChange= {(event)=>setDescription(event.target.value)}/></td>
            <td><input className="form-control" name="category" value={category} onChange= {(event)=>setCategory(event.target.value)}/></td>
            <td><input className="form-control" name="price" value={price} onChange= {(event)=>setPrice(event.target.value)}/></td>
            <td><input className="form-control" name="amount" value={amount} onChange= {(event)=>setAmount(event.target.value)}/></td>
            <td><input className="form-control" name="provider name" value={provider_name} onChange= {(event)=>setProvider_name(event.target.value)}/></td>
            <td><input className="form-control" name="privider CIF" value={provider_cif} onChange= {(event)=>setProvider_cif(event.target.value)}/></td>


            <td><button className="btn btn-primary" onClick={()=>props.onSave({code:code, name: name, description: description, category:category, price:price, amount:amount, provider_name:provider_name, provider_cif:provider_cif})}>Save</button></td>
            <td><button className="btn btn-primary" onClick={()=>props.onDelete(props.product)}>Delete</button></td>
        </tr>
        
    );

}

export default EditProduct;