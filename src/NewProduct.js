import { useState } from "react";

function NewProduct(props) {
    const [name, setName]= useState('');
    const [description, setDescription] = useState('');

    function onClick() {
        const NewProduct = {
            name: name,
            description: description
        };
        const res=props.onAddProduct(NewProduct);
        if (res){
            setName('');
            setDescription('');
        }
        

        
    }
    return(
        <tr>
            <td><input className="form-control" name="name" value={name} onChange= {(event)=>setName(event.target.value)}/></td>
            <td><input className="form-control" name="description" value={description} onChange= {(event)=>setDescription(event.target.value)}/></td>
            <td><button className="btn btn-primary" onClick={onClick}>Add Product</button></td>
        </tr>
    )
}

export default NewProduct;