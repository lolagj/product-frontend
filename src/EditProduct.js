import { useState } from "react";

function EditProduct(props){
    const [name, setName]=useState(props.product.name);

    const [description, setDescription]=useState(props.product.description);

    return(
        
        <tr>
            <td><input className="form-control" name="name" value={name} onChange={(event)=>setName(event.target.value)}/></td>
            <td> <input className="form-control" name="description" value={description} onChange={(event)=>setDescription(event.target.value)}/></td>
            <td><button className="btn btn-primary" onClick={()=>props.onSave({name: name, description: description})}>Save</button></td>
            <td><button className="btn btn-primary" onClick={()=>props.onDelete(props.product)}>Delete</button></td>
        </tr>
        
    );

}

export default EditProduct;