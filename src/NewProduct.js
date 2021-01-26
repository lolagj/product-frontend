import { useState } from "react";

function NewProduct(props) {
    const [code, setCode]= useState('');
    const [name, setName]= useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [amount, setAmount] = useState('');
    const [provider_name, setProvider_name]= useState('');
    const [provider_cif, setProvider_cif]= useState('');

    function onClick() {
        const NewProduct = {
            code: code,
            name: name,
            description: description,
            category: category,
            price:price,
            amount:amount,
            provider_name: provider_name,
            provider_cif:provider_cif

        };
        const res=props.onAddProduct(NewProduct);
        if (res){
            setCode('');
            setName('');
            setDescription('');
            setCategory('');
            setPrice('');
            setAmount('');
            setProvider_name('');
            setProvider_cif('');
            

        }
        

        
    }
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

            <td><button className="btn btn-primary" onClick={onClick}>Add Product</button></td>
        </tr>
    )
}

export default NewProduct;